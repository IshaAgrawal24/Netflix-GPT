import { appLogo } from '../../config/Constant'

type LogoProps = {
    size: 'sm' | 'md';
};

const Logo = ({ size }: LogoProps) => {
    const sizeClasses = {
        sm: "w-30",
        md: "w-44",
    };
    return (
        <div >
            <img className={sizeClasses[size] || sizeClasses.md} src={appLogo} alt="netflix-logo" />
        </div>
    )
}

export default Logo