import {AnimatePresence, motion} from 'motion/react';
import {FC, PropsWithChildren, useMemo, useState} from 'react';

import {SuccessOverlayContext} from './context';
import {LottieWithSuspense} from '../../components/lottie/lottie-with-suspense';

export const SuccessOverlayProvider: FC<PropsWithChildren> = ({children}) => {
    const [visible, setVisible] = useState(false);

    const value = useMemo(
        () => ({
            show: () => setVisible(true)
        }),
        []
    );

    const handleClose = () => setVisible(false);

    return (
        <SuccessOverlayContext.Provider value={value}>
            {children}
            <AnimatePresence>
                {visible && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        onClick={handleClose}
                        onTouchStart={handleClose}
                    >
                        <div className="flex flex-col gap-15 w-full items-center px-4">
                            <div className="flex flex-col gap-6 items-center">
                                <LottieWithSuspense
                                    speed={0.9}
                                    src="animations/boomstick.lottie"
                                />

                                <div className="flex flex-col gap-3 items-center text-[var(--c-constant-white)]">
                                    <p className="h0-text">You Got It!</p>
                                    <p className="body-text">
                                        Your purchase is on the way
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex h-12.5 w-full justify-center items-center rounded-[12px] bg-[var(--c-constant-white)]"
                                onClick={handleClose}
                            >
                                <p className="big-button-text text-[var(--c-constant-black)]">
                                    Awesome
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SuccessOverlayContext.Provider>
    );
};
