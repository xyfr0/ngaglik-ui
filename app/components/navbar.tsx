import { Link } from 'react-router'
import Logo from '../assets/Logo Kota Batu.png'

function LinkButton({ name }: { name: string }) {
    return (
        <li className="inline-block h-8">
            <Link to="/">
                <a className="text-lg font-bold mr-8 ml-4 hover:underline" >{name}</a>
            </Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <header className='bg-green-900'>
            <nav className="flex justify-between items-center w-[92%] mx-auto contain-content">
                <div id="nama-logo" className="flex">
                    <img className="w-16" src={Logo} alt="logo kota Batu" />
                    <div>
                        <h5><b>Kelurahan Ngaglik</b></h5>
                        <h6>Kecamatan Batu</h6>
                    </div>
                </div>
                <button type="button"></button>
                <div className='md:static absolute bg-green-900 md:min-h-fit min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5'>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                        <LinkButton name="Home" />
                        <LinkButton name="Profil" />
                        <LinkButton name="Berita" />
                        <LinkButton name="Peta" />
                        <LinkButton name="Wisata" />
                    </ul>
                </div>
            </nav>
        </header>
    )
}