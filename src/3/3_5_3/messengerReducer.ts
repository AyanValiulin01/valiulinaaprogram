
export type State = {
    selectedId: number;
    messages: { [key: number]: string }; // Черновики для каждого контакта
};

export type Action = 
  | { type: 'changed_selection'; contactId: number }
  | { type: 'edited_message'; message: string }
  | { type: 'sent_message' };

export const initialState: State = {
    selectedId: 0,
    messages: {}, // Храним черновики здесь
};

export function messengerReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message, // Сохраняем черновик для контакта
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '', // Очищаем черновик только для текущего контакта
                },
            };
        }
        default:
            throw Error('Unknown action: ' + action.type);
    }
}
