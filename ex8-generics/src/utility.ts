interface CourseGoal {
    title: string
    description: string
    completeUntil: Date
}

function createCourseGoal (
    title: string,
    description: string,
    date: Date
): CourseGoal {
    // we use Partial utility type to declare an object with an open structure, then return parsed from Partial to CourseGoal
    let courseGoal: Partial<CourseGoal> = {}
    
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    
    return courseGoal as CourseGoal
}

//another generic utility class is Readonly, which locks any structure, like arrays
//classic const array pushing
const family: string[] = ['L', 'I']
family.push('Rob')

//with Readonly parametrized
const familyLocked: Readonly<string[]> = ['L', 'I']
// familyLocked.push('Rob') //error!