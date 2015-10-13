// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function getPrime(number)
{
    var factor = 2;
    while(number != factor)
    {
        if(number % factor === 0)
        {
            number = number / factor;
        }
        else
        {
            factor++;
        }
    }
    //return factor;
    console.log(factor);
}

getPrime(600851475143);