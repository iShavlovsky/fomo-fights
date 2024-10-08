import { Link } from 'react-router-dom';

import styles from './index.module.css';

import stylesHead from '@styles/baseBlock.module.css';
import stylesBtn from '@components/common/Button/Button.module.css';
import NavBar from '@components/NavBar';
import CloseIco from '@icon/close-404-ico.svg';

interface Props404 {
    title?: string;
}

export default function Error404({ title = '404 Page not found' }: Props404) {
    return (
        <>
            <NavBar />
            <section className={`bg-purple-4 ${styles.section404}`}>
                <div className={`container ${styles.container404}`}>
                    <div className={`${styles.content404Holder}`}>

                        <div className={`${styles.content404W}`}>
                            <div
                                className={`title-w flex justify-between ${stylesHead.head} ${stylesHead.headDarkPink}`}
                            >
                                <h1 className="h2-2 text-color-monochrome-1">{title}</h1>
                                <Link
                                    to="/"

                                >
                                    <CloseIco />
                                </Link>

                            </div>
                            <div className={`${styles.subtitle404W}`}>
                                <div className={`${styles.img404}`} title="404 Page not found image" />
                                <p className="body-s-2 text-center text-color-monochrome-9">
                                    Oh no! Looks like this page has been
                                    knocked out :(
                                </p>
                                <Link
                                    to="/"
                                    className={`mt-20 w-full no-decorate ${stylesBtn.buttonWrapper} ${stylesBtn.secondary}`}
                                >
                                    <span className={`button-text ${stylesBtn.buttonSpan}`}>
                                        Back to the home
                                        page
                                    </span>

                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}
