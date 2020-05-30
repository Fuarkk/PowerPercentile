class HomeController < ApplicationController
  def index
  end

  def submit_data
    puts params

    @data = Lifter.where.has{|l| (l.weightClassKg == params[:weightClass]) & (l.total != nil)}
    puts @data.count

    squat    = (@data.where.has{|l| l.squat != nil}).order(squat: :asc).pluck(:squat);
    bench    = (@data.where.has{|l| l.bench != nil}).order(bench: :asc).pluck(:bench);
    deadlift = (@data.where.has{|l| l.deadlift != nil}).order(deadlift: :asc).pluck(:deadlift);
    total    = (@data.where.has{|l| (l.bench != nil) && (l.squat != nil) && (l.deadlift != nil)}).order(total: :asc).pluck(:total);

    @data = [squat, bench, deadlift, total];

    respond_to do |format|
      format.js
    end
  end

end
