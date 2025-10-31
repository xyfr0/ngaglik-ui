import { Link } from 'react-router'

function LinkButton({ name }: { name: string }) {
    return (
        <li className="inline-block h-8">
            <Link to="/">
                <b className="text-lg font-bold mr-8 ml-4 hover:underline">{name}</b>
            </Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="flex bg-green-900 contain-content">
            <img className="w-16" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5tD5Xe_SQ-7_Hm47dwSArmpr2fhi2yvzNyOdkLf82I6HJ346GjUP11kWRs42vQ6GMvJv49VoSyWy1816EyQ3ceDoWiuhMsFMhcb8vlYEJQLC-IeAUbj7A9lVSuGrcGRHFl8AwddyLQKBwv9vcH9y1ZiOz61ig8KtEtNOos2KEmiX06TY2qrNkij8P/w400-h300/Logo%20Kota%20Batu.png" alt="logo kota Batu" />
            <div id="nama-logo" className="">
                <h5><b>Kelurahan Ngaglik</b></h5>
                <h6>Kecamatan Batu</h6>
            </div>
            <button type="button"></button>
            <div className="pb-1.5 justify-end">
                <ul>
                    <LinkButton name="Home" />
                    <LinkButton name="Profil" />
                    <LinkButton name="Berita" />
                    <LinkButton name="Peta" />
                    <LinkButton name="Wisata" />
                </ul>
            </div>
        </nav>
    )
}