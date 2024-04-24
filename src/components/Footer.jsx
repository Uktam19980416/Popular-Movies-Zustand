import { GithubOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
function Footer() {
  const now = new Date()
  return (
    <div>
      <footer className="footer">
        <p>
          Created by{' '}
          <Link to="https://github.com/Uktam19980416" target="_blank">
            {' Uktamjon '}
            <GithubOutlined />{' '}
          </Link>{' '}
          {now.getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default Footer
