// Design and implement a robust solution for handling asynchronous API calls in a React application using custom hooks. The goal is to create a reusable and efficient mechanism for making API requests, managing loading and error states, and handling the lifecycle of the data fetching process.


import useApi from './UseApi'

const Countries = () => {
    const { data, loading, error } = useApi();
    console.log(data);

    if (error) {
        return <h1 className='landing-heading'>
            Error: {
                error.message
            }
        </h1>
    }
    return (
        <section className=" flex items-center justify-center flex-col ">
            <div className="  container">
                <h1 className=' flex items-center justify-center'>
                    Data from API:
                </h1>
                {
                    loading ? <h1 className='landing-heading'>
                        Loading...
                    </h1> : data && data.map((item) => (
                        <div className='col-md-4' key={item.id}>
                            <div className="card card-wrap mb-2">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {
                                            item.name ? item.name.common : 'Name'
                                        }
                                    </h5>
                                    <p className="card-text">
                                        {
                                            item.name ? item.name.official : 'Official'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Countries