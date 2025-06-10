import {animate, motion, useMotionValue} from 'motion/react';

import {CartSheet} from '@pages/cart-sheet/cart-sheet';
import {useNavigateBack} from '@utils/navigation.utils';

export const CartSheetMotion = () => {
    const navigateBack = useNavigateBack();

    const y = useMotionValue(0);
    const snapBack = () =>
        animate(y, 0, {type: 'spring', stiffness: 320, damping: 28});

    return (
        <>
            {/* backdrop */}
            <motion.div
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={navigateBack}
                onTouchStart={navigateBack}
            />

            {/* sheet */}
            <motion.div
                className="fixed inset-x-0 bottom-0 z-50 ounded-tl-[20px] rounded-tr-[20px] bg-bw shadow-lg touch-none"
                style={{y}}
                initial={{y: '100%'}}
                animate={{y: 0}}
                exit={{y: '100%'}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                drag="y"
                dragDirectionLock
                dragConstraints={{top: 0}}
                dragElastic={{top: 0, bottom: 1}}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                    if (info.offset.y > 90) navigateBack();
                    else snapBack();
                }}
            >
                <CartSheet />
            </motion.div>
        </>
    );
};
