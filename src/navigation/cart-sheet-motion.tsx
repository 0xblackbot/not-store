import {animate, motion, useMotionValue} from 'motion/react';
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {CartSheet} from '../pages/cart-sheet';

export const CartSheetMotion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hasBackground = Boolean(location.state?.background);

    // Redirect deep links
    useEffect(() => {
        if (!hasBackground) navigate('/', {replace: true});
    }, [hasBackground, navigate]);

    const y = useMotionValue(0);
    const snapBack = () =>
        animate(y, 0, {type: 'spring', stiffness: 320, damping: 28});

    return (
        <>
            {/* backdrop */}
            <motion.div
                className="fixed inset-0 z-40 backdrop-blur-sm"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={() => navigate(-1)}
            />

            {/* sheet */}
            <motion.div
                className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-lg p-4 touch-none"
                style={{y}}
                initial={{y: '100%'}}
                animate={{y: 0}}
                exit={{y: '100%'}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                drag="y"
                dragDirectionLock
                dragConstraints={{top: 0}}
                dragElastic={0.1}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                    if (info.offset.y > 90) navigate(-1);
                    else snapBack();
                }}
            >
                <CartSheet />
            </motion.div>
        </>
    );
};
