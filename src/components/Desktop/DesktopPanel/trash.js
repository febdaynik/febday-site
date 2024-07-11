import { ReactComponent as UserTrashSvg } from '../../../images/desktop_icons/user-trash-symbolic.svg';

export default function TrashComponent() {
    return (
        <div className="empty-folder">
            <UserTrashSvg />
            <h1>Корзина пуста</h1>
        </div>
    )
}