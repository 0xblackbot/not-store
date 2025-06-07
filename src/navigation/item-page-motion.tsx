import {animate, motion, useMotionValue} from 'motion/react';
import {FC} from 'react';

import {ItemPage} from '../pages/item-page';
import {useNavigateBack} from '../utils/navigation.utils';

interface Props {
    isModal: boolean;
}

export const ItemPageMotion: FC<Props> = ({isModal}) => {
    const slideIn = isModal;
    const x = useMotionValue(0);
    const navigateBack = useNavigateBack();

    const snapBack = () =>
        animate(x, 0, {type: 'spring', stiffness: 320, damping: 28});

    return (
        <motion.div
            className="fixed inset-0 flex flex-col z-40 bg-bw pt-inset-top overflow-y-auto overscroll-contain"
            style={{x}}
            initial={{x: slideIn ? '100%' : 0}}
            animate={{x: 0}}
            exit={{x: slideIn ? '100%' : 0}}
            transition={{duration: slideIn ? 0.3 : 0, ease: 'easeInOut'}}
            drag="x"
            dragDirectionLock
            dragConstraints={{left: 0}}
            dragElastic={{left: 0, right: 1}}
            dragMomentum={false}
            onDragEnd={(_, info) => {
                if (info.offset.x > 90) navigateBack();
                else snapBack();
            }}
        >
            <ItemPage />
        </motion.div>
    );
};
