class UserInfoController < ApplicationController
    def index
        user_info = UserInfo.all

        render json: {
            user: UserInfo.all.map do |data|
                {
                    id: data.account.id,
                    email: data.account.email,
                    first_name: data.first_name,
                    alias: data.alias,
                    last_name: data.last_name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    birth_month: data.birth_month,
                    birth_day: data.birth_day,
                    birth_state: data.birth_state,
                    mothers_first: data.mothers_first,
                    mothers_last: data.mothers_last,
                    fathers_first: data.fathers_first,
                    fathers_last: data.fathers_last,
                }
            end,
            search: SearchInfo.all.map do |data|
                {
                    id: data.account.id,
                    email: data.account.email,
                    first_name: data.first_name,
                    alias: data.alias,
                    last_name: data.last_name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    birth_month: data.birth_month,
                    birth_day: data.birth_day,
                    birth_state: data.birth_state,
                    mothers_first: data.mothers_first,
                    mothers_last: data.mothers_last,
                    fathers_first: data.fathers_first,
                    fathers_last: data.fathers_last,
                    last_year_seen:data.last_year_seen,
                    they_are_to_you:data.they_are_to_you,
                    you_are_to_them:data.you_are_to_them,
                    reason_for_separation:data.reason_for_separation,
                }
            end
            
        }
    end
end
 
