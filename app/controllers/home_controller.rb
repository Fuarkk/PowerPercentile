class HomeController < ApplicationController
  def index
  end

  def submit_data
    @data = Lifter.where.has{|l| (l.weightClassKg == params[:weightClass].to_i) & (l.age <= params[:age]) & (l.total != nil)}

    squatArr    = (@data.where.has{|l| l.squat != nil}).order(squat: :asc).pluck(:squat);
    benchArr    = (@data.where.has{|l| l.bench != nil}).order(bench: :asc).pluck(:bench);
    deadliftArr = (@data.where.has{|l| l.deadlift != nil}).order(deadlift: :asc).pluck(:deadlift);
    totalArr    = (@data.where.has{|l| (l.bench != nil) && (l.squat != nil) && (l.deadlift != nil)}).order(total: :asc).pluck(:total);

    @data = [squatArr, benchArr, deadliftArr, totalArr];

    @user_stats = [params[:squat].to_i, params[:bench].to_i, params[:deadlift].to_i].to_json.html_safe;

    respond_to do |format|
      format.js
    end
  end
end
