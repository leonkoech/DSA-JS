/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // minimum number of conference rooms required 
    // [0                 30]
    //   [5  10]
    //           [15  20]
    // two pointer 
    
    const start_times = intervals.map((a)=>{return a[0]})
    const end_times  = intervals.map((a)=>{return a[1]})
    
    // remember to sort starting times and ending times 
    start_times.sort((a,b) => a-b)
    end_times.sort((a,b) => a-b)
    
    var start_pointer = 0,
        end_pointer = 0,
        room_number = 0;
    
    while (start_pointer<intervals.length && end_pointer<intervals.length) {
        // if meetings have the same end time and start time count that as a free room eg [0,26],[26,40]
        if (start_times[start_pointer]>=end_times[end_pointer]){
            room_number --
            end_pointer++
        }
        room_number ++
        start_pointer++
    }
    return room_number
};