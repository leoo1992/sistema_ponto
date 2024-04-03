import UserIcon from "../../Icons/UserIcon";

export default function UserMenu() {
    return (
        <div className="drawer drawer-end flex flex-row-reverse w-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="btn btn-ghost p-0 m-0 btn-circle drawer-button"><UserIcon /></label>
            </div>
            <div className="drawer-side h-svh w-svw z-50">
                <label htmlFor="my-drawer-4" aria-label="close sidebar"
                    className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center">
                </label>
                <ul className="menu p-4 h-svh bg-base-300 text-base-content glass shadow-md shadow-secondary">
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
        </div>
    )
}
