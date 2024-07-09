import bcrypt from 'bcryptjs';
import promptSync from 'prompt-sync';

const prompt = promptSync();

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