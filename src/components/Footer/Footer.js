import React from 'react'

const Footer = () => {
    return (
        <footer className='footer py-4 bg-dark d-flex flex-column align-items-center justify-content-center'>
            <p className='text-center '>&copy;2021. Marceli Bil.</p>

            <p className='text-muted m-0'>Rick and Morty is created by Justin Roiland and Dan Harmon for <a href="https://www.adultswim.com" target="_blank" rel="nofollow noopener noreferrer" className='text-muted text-decoration-underline'>Adult Swim</a> . The data and images are used without claim of ownership and belong to their respective owners.</p>
        </footer>
    )
}

export default Footer
