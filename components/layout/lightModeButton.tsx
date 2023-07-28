import { useTheme } from 'next-themes';
import MoonIcon from '../../assets/icons/moon.svg';
import SunIcon from '../../assets/icons/sun.svg';

const LightModeButton = () => {
    const { theme, setTheme } = useTheme();
    const darkMode = theme === 'dark';
    return (
        <button className={'w-8 h-8'} onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}>
            {darkMode ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};

export default LightModeButton;
