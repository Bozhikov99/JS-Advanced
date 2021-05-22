function solve(speed, zoneInput)
{
    let kmh=Number(speed);
    let zone=zoneInput;
    let speedLimit=0;
    let output='';

    if (zone=='motorway') 
    {
        speedLimit=130;
    }
    else if (zone=='interstate')
    {
        speedLimit=90;
    }
    else if (zone=='city')
    {
        speedLimit=50;
    }
    else if (zone=='residential')
    {
        speedLimit=20;
    }

    if (kmh-speedLimit<=0) 
    {
        output=`Driving ${kmh} km/h in a ${speedLimit} zone`;
    }
    else
    {
        let status='';

        if (kmh-speedLimit<=20)
        {
            status='speeding';            
        }
        else if(kmh - speedLimit <=40)
        {
            status=`excessive speeding`;
        }
        else
        {
            status='reckless driving';
        }

        output=`The speed is ${kmh-speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    console.log(output);
}

solve(40, 'city');
solve(120, 'interstate')