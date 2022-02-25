import { forwardRef } from 'react';
import './Button.scss'

const Button = forwardRef(({ type, children, ...other }, ref) => {
    const Tag = type;

    return <Tag ref={ref} className="button" {...other}>{children}</Tag>
});

export default Button;