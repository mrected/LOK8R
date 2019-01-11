class UserInfoController < ApplicationController
    def index
        user_info = UserInfo.all

        render json: {
            user_info: user_info.map do |data|
                {
                    email: data.account.email,
                    first_name: data.first_name,
                    alias: data.alias,
                    last_name: data.last_name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    birth_month: data.birth_month,
                    birth_day: data.birth_day,
                    mothers_first: data.mothers_first,
                    mothers_last: data.mothers_last,
                    fathers_first: data.fathers_first,
                    fathers_last: data.fathers_last,
                }
            end
        }
    #     user: [
    #     {email:"jimmy@mail.com"},
    #     {first_name:"james"},
    #     {alias:"jimmy"},
    #     {last_name:"hoffa"},
    #     {gender:"m"},
    #     {birth_year:"1985"},
    #     {birth_month:"2"},
    #     {birth_day:"2"},
    #     {birth_state:"guam"},
    #     {mothers_first:"mom"},
    #     {mothers_last:"parent"},
    #     {fathers_first:"dad"},
    #     {fathers_last:"parent"},
    #   ],
    #   searchInfo : {
    #     first_name:"amelia",
    #     alias:"plane lady",
    #     last_name:"earhart",
    #     gender:"f",
    #     birth_year:"1912",
    #     birth_month:"3",
    #     birth_day:"3",
    #     birth_state:"micronesia",
    #     mothers_first:"mom",
    #     mothers_last:"parent",
    #     fathers_first:"dad",
    #     fathers_last:"parent",
    #     last_year_seen:"1945",
    #     they_are_to_you:"sister",
    #     you_are_to_them:"brother",
    #     reason_for_separation:"unknown",
    #   }
    end
end
 
