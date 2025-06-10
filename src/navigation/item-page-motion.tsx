import {PanInfo, animate, motion, useMotionValue} from 'motion/react';
import {FC} from 'react';

import {ItemPage} from '@pages/item-page/item-page';
import {useNavigateBack} from '@utils/navigation.utils';

interface Props {
    isModal: boolean;
}

export const ItemPageMotion: FC<Props> = ({isModal}) => {
    const x = useMotionValue(0);
    const navigateBack = useNavigateBack();

    const handleDragStart = () => {
        document.body.style.overflow = 'hidden';
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        document.body.style.overflow = '';
        if (info.offset.x > 90) {
            navigateBack();
        } else {
            animate(x, 0, {type: 'spring', stiffness: 320, damping: 28});
        }
    };

    return (
        <motion.div
            className="fixed inset-0 flex flex-col z-40 bg-bw pt-inset-top"
            style={{
                x,
                touchAction: 'pan-y',
                willChange: 'transform',
                contain: 'layout paint'
            }}
            initial={{x: isModal ? '100%' : 0}}
            animate={{x: 0}}
            exit={{x: isModal ? '100%' : 0}}
            transition={{duration: isModal ? 0.3 : 0, ease: 'easeInOut'}}
            drag="x"
            dragDirectionLock
            dragConstraints={{left: 0}}
            dragElastic={{left: 0, right: 1}}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <div className="flex flex-1 flex-col overflow-y-auto overscroll-contain">
                <ItemPage />
            </div>
        </motion.div>
    );
};
