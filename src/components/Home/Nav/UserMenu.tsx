import UserIcon from "../../Icons/UserIcon";

export default function UserMenu() {
    return (
        <div className="dropdown dropdown-end">
            <UserIcon />
            <ul tabIndex={0}
                className="mt-3 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 
                           rounded-bl-box glass shadow-secondary">
                <li>
                    <a>
                        Perfil
                    </a>
                </li>
                <li>
                    <a>
                        Configurações
                    </a>
                </li>
                <li>
                    <a>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}
