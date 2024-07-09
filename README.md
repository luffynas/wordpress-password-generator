### `README.md`

```markdown
# WordPress Password Generator

This project provides a simple script to generate hashed passwords suitable for WordPress using Node.js. The script uses `bcryptjs` for hashing and `prompt-sync` for user input.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/wordpress-password-generator.git
    cd wordpress-password-generator
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To generate a hashed password for WordPress, run the following command:
```bash
node generateWordPressPassword.js
```

You will be prompted to enter the password you want to hash. The script will output the hashed password, which you can then use in your WordPress database.

### Example

```bash
$ node generateWordPressPassword.js
Enter the password you want to hash for WordPress: mySecurePassword123
Your hashed password for WordPress is: $2a$10$E8C/8jL6eV8pRI0LkG0mOeS/jY0FgS0kgKb/vLf5OG7F9ZkVVudOm
```

## Dependencies

This project uses the following dependencies:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): A library to help you hash passwords.
- [prompt-sync](https://www.npmjs.com/package/prompt-sync): A synchronous prompt for Node.js.

To install the dependencies, run:
```bash
npm install bcryptjs prompt-sync
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Struktur Direktori Proyek

```
wordpress-password-generator/
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── node_modules/
└── generateWordPressPassword.js
```

### `package.json`

```json
{
  "name": "wordpress-password-generator",
  "version": "1.0.0",
  "description": "A simple Node.js script to generate hashed passwords for WordPress by @luffynas.",
  "main": "generateWordPressPassword.js",
  "scripts": {
    "start": "node generateWordPressPassword.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "prompt-sync": "^4.2.0"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

### `generateWordPressPassword.js`

```javascript
const bcrypt = require('bcryptjs');
const prompt = require('prompt-sync')();

const generateWordPressPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const main = async () => {
    const password = prompt('Enter the password you want to hash for WordPress: ');
    if (!password) {
        console.error('Password cannot be empty.');
        process.exit(1);
    }

    try {
        const hashedPassword = await generateWordPressPassword(password);
        console.log(`Your hashed password for WordPress is: ${hashedPassword}`);
    } catch (error) {
        console.error('Error generating hashed password:', error);
    }
};

main();
```

### Lisensi (`LICENSE`)

```plaintext
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```