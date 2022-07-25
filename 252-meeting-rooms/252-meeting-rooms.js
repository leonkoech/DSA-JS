/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    // meeting overlap means no meeting is to be attended 
    // overlap
    // [0                    30]
    //      [5      10]
    // [0    5]
    // are the meetings sorted? if not sort them based on the start times of the a
    // create a scheduled meeting arr
    // check if the meeting start timeis in the list
    // return false if it's inside 
    // return true at the end of the loop
    
    intervals.sort((a,b) => a[0]-b[0])
    const meetings = [intervals[0]]
    
    for (let i=1;i<intervals.length;i++) {
        let current_meeting  = intervals[i]
        let prev_meeting = meetings[meetings.length-1]
        if(checkOverlap(current_meeting,prev_meeting)){
            // return false
            return false
        }
        else {
            // add meeting to meeting array
            meetings.push(intervals[i])
        }
    }
    return true
    
};
function checkOverlap(arr1,arr2) {
    let val = Math.max(arr1[0],arr2[0]) - Math.min(arr1[1],arr2[1])
    return (val<0)
}