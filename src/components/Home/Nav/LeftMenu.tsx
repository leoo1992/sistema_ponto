import HamburgMenu from "../../Icons/HamburgMenu";

export default function LeftMenu() {
    return (
        <div className="navbar-start">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><HamburgMenu /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 min-h-full bg-base-300 text-base-content glass shadow-md shadow-secondary">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
