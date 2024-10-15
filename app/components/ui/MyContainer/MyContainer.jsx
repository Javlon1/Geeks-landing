import { Children, cloneElement } from 'react';
import styles from './MyContainer.module.scss'


const MyContainer = ({ children }) => {

    return (
        <div className={styles.myContainer}>
            {
                Children.map(children, (child) => {
                    return cloneElement(child);
                })
            }
        </div>
    );
};

export default MyContainer;