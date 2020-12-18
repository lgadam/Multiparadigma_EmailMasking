
const dummy_function = () => {
    return true;
}

const email = 'ligartadam@gmail.com';
const EmailMasking = (email) => {
    const [name, mailDomain] = email.split('@');
    let modifiedName = name[0];
    let i = 0;
    for (i; i <=name.length-2; ++i)
    {
        modifiedName+='*';
    }
    const modifiedEmail = modifiedName +'@'+ mailDomain;
    return modifiedEmail;
};
console.log(EmailMasking(email));

module.exports = {
    dummy_function: dummy_function,
    EmailMasking: EmailMasking
}