import HamburgMenu from "../../Icons/HamburgMenu";

export default function LeftMenu() {
    return (
        <div className="navbar-start">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-circle btn-ghost drawer-button"><HamburgMenu /></label>
                </div>
                <div className="drawer-side h-svh w-svw z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar"
                        className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center ">
                    </label>
                    <ul className="menu p-4 h-svh bg-base-300 text-base-content glass shadow-md shadow-secondary">
                        <li>
                            <a>
                                Histórico Registros
                            </a>
                        </li>
                        <li>
                            <a>
                                Sidebar Item 2
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
