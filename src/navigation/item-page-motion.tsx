import {animate, motion, useMotionValue} from 'motion/react';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import {ItemPage} from '../pages/item-page';

interface Props {
    isModal: boolean;
}

export const ItemPageMotion: FC<Props> = ({isModal}) => {
    const slideIn = isModal;
    const navigate = useNavigate();
    const x = useMotionValue(0);

    const snapBack = () =>
        animate(x, 0, {type: 'spring', stiffness: 320, damping: 28});

    return (
        <motion.div
            className="fixed inset-0 z-40 bg-white overflow-y-auto touch-none"
            style={{x}}
            initial={{x: slideIn ? '100%' : 0}}
            animate={{x: 0}}
            exit={{x: slideIn ? '100%' : 0}}
            transition={{duration: slideIn ? 0.3 : 0, ease: 'easeInOut'}}
            drag="x"
            dragDirectionLock
            dragElastic={0.1}
            dragMomentum={false}
            onDragEnd={(_, info) => {
                if (info.offset.x > 90) navigate(-1);
                else snapBack();
            }}
        >
            <ItemPage />
        </motion.div>
    );
};
