import UserIcon from "../../Icons/UserIcon";

export default function UserMenu() {
    return (
        <div className="drawer drawer-end flex flex-row-reverse w-10 transition-all duration-500 ease-in-out">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle transition-all duration-500 ease-in-out" />
            <div className="drawer-content transition-all duration-500 ease-in-out">
                <label htmlFor="my-drawer-4" className="btn btn-ghost p-0 m-0 btn-circle drawer-button"><UserIcon /></label>
            </div>
            <div className="drawer-side h-screen w-screen z-50 transition-all duration-500 ease-in-out">
                <label htmlFor="my-drawer-4" aria-label="close sidebar"
                    className="drawer-overlay h-screen w-screen flex justify-between
                        self-center align-middle items-center content-center transition-all duration-500 ease-in-out">
                </label>
                <ul className="menu p-4 h-screen bg-base-300 text-base-content glass shadow-md shadow-secondary transition-all duration-500 ease-in-out">
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
