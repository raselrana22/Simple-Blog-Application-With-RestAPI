import Welcome from '../../components/welcome'

export default async function Home() {
    return (
        <div >
            <div className='min-h-screen bg-gray-100'>
                <Welcome />
            </div>
        </div>
    );
}
