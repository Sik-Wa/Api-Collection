// Implement Logic for URL Shortner

import axios from 'axios';
import { useState } from 'react';

function UrlShortener() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenUrl, setShortenUrl] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('https://api-ssl.bitly.com/v4/shorten', {
                long_url: originalUrl,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'a6d50d6385c75ff31cf33fd17cac003f4f5f6d45' //YOUR_API_KEY
                }
            });

            setShortenUrl(response.data.id);
            console.log(response.data.id);

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section className=" w-full flex items-center justify-center">
            <div className=" border h-[300px] w-[500px] bg-white ">
                <div className="landing-box">
                    <h2 className='landing-heading mt-2 flex items-center justify-center'>URL Shortener</h2>
                    <div className=' mt-10 flex justify-center items-center'>
                        <label className='form-label mr-2'>Enter URL:</label>
                        <input
                        
                            className="form-control ml-4 rounded-md bg-black text-white "
                            placeholder='https://example.com'
                            type="text"
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary mt-3 outline' onClick={handleClick}>Shorten</button>

                    {
                        shortenUrl && (
                            <div className='mt-3'>
                                <h4 className='landing-sub-heading'>Shorten URL:</h4>
                                <button className='btn btn-primary'>
                                    {shortenUrl}
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default UrlShortener;
