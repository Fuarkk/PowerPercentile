require 'csv'

CSV.foreach('OPLData/DATAFINAL.csv', headers: true) do |row|

  tested = row[13] == "Yes" ? true : false;

  lifter = Lifter.find_or_create_by name:  row[0],
                           sex:            row[1],
                           event:          row[2],
                           equipment:      row[3],
                           age:            row[4],
                           division:       row[5],
                           bodyweightKg:   row[6],
                           weightClassKg:  row[7],
                           squat:          row[8],
                           bench:          row[9],
                           deadlift:       row[10],
                           total:          row[11],
                           place:          row[12],
                           tested:         tested,
                           country:        row[14],
                           federation:     row[15],
                           meetDate:       row[16]

    puts "added lifter: #{lifter.id} - #{lifter.name}"
end
