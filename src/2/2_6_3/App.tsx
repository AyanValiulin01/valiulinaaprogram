/*
    Имеется перетаскиваемый ящик на статичном фоне. Вы можете изменить цвет поля с помощью кнопки select.

    Но есть ошибка. Если сначала переместить ящик, а затем изменить его цвет, фон (который не должен двигаться!) "перепрыгнет" на позицию ящика. Но этого не должно произойти: параметр position у Background установлен в initialPosition, что равно { x: 0, y: 0 }. Почему фон перемещается после изменения цвета?

    На этот раз исправьте мутацию, используя Immer. Для вашего удобства функция useImmer уже импортирована, поэтому вам нужно изменить переменную состояния shape, чтобы использовать ее.
*/import { useImmer } from 'use-immer';
import Background from './Background';
import Box from './Box';

export type Position = { x: number; y: number };

const initialPosition = { x: 0, y: 0 };

export default function Canvas() {
    const [shape, setShape] = useImmer({
        color: 'orange',
        position: initialPosition,
    });

    function handleMove(dx: number, dy: number) {
        setShape((draft) => {
            draft.position.x += dx; // 
            draft.position.y += dy;
        });
    }

    function handleColorChange(e: any) {
        setShape((draft) => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select value={shape.color} onChange={handleColorChange}>
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box color={shape.color} position={shape.position} onMove={handleMove}>
                Drag me!
            </Box>
        </>
    );
}
