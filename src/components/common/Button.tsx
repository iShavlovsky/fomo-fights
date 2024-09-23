import styles from './Button.module.css'

interface PropsButton {
    text: string;
}

function Button({text = ''}: PropsButton) {
    return <button>
        <span className={`btn-all ${styles.button}`}>
            {text}
        </span>
    </button>
}

export default Button
