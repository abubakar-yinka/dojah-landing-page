import React from 'react'
import ContReading from './ContReading'

const Blog = () => {
    return (
        <div>
            <div className="frame-272">
                <div className="flex-col-1">
                    <div className="frame-19">
                        <div className="rectangle-128"></div>
                        <div className="text-25">Read our case studies</div>
                        <p className="text-26">
                            Find out about exciting products that have been built and that you can build with Dojah!
                        </p>
                        <div className="frame-4-3">
                            <div className="check-out-more">Check out more</div>
                            <img
                            className="vector-2"
                            src="assets/assets(svg)/vector-5@2x.svg"
                            alt="vector-2"
                            />
                        </div>
                    </div>
                    <div className="group-266">
                        <div className="text-24">
                            Authorizing requests and identifying your application
                        </div>
                        <img
                            className="line-1"
                            src="assets/assets(svg)/line-1@2x.svg"
                            alt="line-1"
                        />
                        <ContReading />
                    </div>
                </div>

                <div className="flex-col-2">
                    <div className="group-262">
                        <div className="text-21">Authorizing requests and identifying your application</div>
                        <img
                            className="line-1"
                            src="assets/assets(svg)/line-1@2x.svg"
                            alt="line-1"
                        />
                        <ContReading />
                    </div>
                    <div className="flex-row">
                        <div className="group-265">
                            <div className="text-2">
                                Authorizing requests and identifying your application
                            </div>
                            <img
                                className="line-1"
                                src="assets/assets(svg)/line-1@2x.svg"
                                alt="line-1"
                            />
                            <ContReading />
                        </div>
                        <div className="group-264">
                            <div className="text-2">
                            Authorizing requests and identifying your application
                            </div>
                            <img
                                className="line-1"
                                src="assets/assets(svg)/line-1@2x.svg"
                                alt="line-1"
                            />
                            <ContReading />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
