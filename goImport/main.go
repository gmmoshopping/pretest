package main

import (
	"database/sql"
	"encoding/csv"
	"fmt"
	"os"
	_ "github.com/go-sql-driver/mysql"
)

type planData struct {
	_id             string
	Seed_RepDate    string
	Seed_Year       string
	Seeds_YearWeek  string
	Seed_Varity     string
	Seed_RDCSD      string
	Seed_Stock2Sale string
	Seed_Season     string
	Seed_Crop_Year  string
}

func main() {

	csvFile, err := os.Open("data.csv")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Successfully Opened CSV file")
	defer csvFile.Close()

	csvLines, err := csv.NewReader(csvFile).ReadAll()

	if err != nil {
		fmt.Println(err)
	}
	for _, line := range csvLines {
		plan := planData{
			_id:             line[0],
			Seed_RepDate:    line[1],
			Seed_Year:       line[2],
			Seeds_YearWeek:  line[3],
			Seed_Varity:     line[4],
			Seed_RDCSD:      line[5],
			Seed_Stock2Sale: line[6],
			Seed_Season:     line[7],
			Seed_Crop_Year:  line[8],
		}
		fmt.Println(plan._id + " , " + plan.Seed_RepDate + " , " + plan.Seed_Year + " , " + plan.Seeds_YearWeek + " , " + plan.Seed_Varity + " , " + plan.Seed_RDCSD + " , " + plan.Seed_Stock2Sale + " , " + plan.Seed_Season + " , " + plan.Seed_Crop_Year)
		fmt.Println("Go lang Insert")

		db, err := sql.Open("mysql", "root:Irisgroup@tcp(127.0.0.1:3306)/pretest")
		defer db.Close()
		if err != nil {
			panic(err.Error())
		}
		defer db.Close()

		insForm, err := db.Prepare("INSERT INTO tbl_pretest(_id, Seed_RepDate, Seed_Year, Seeds_YearWeek, Seed_Varity, Seed_RDCSD, Seed_Stock2Sale, Seed_Season, Seed_Crop_Year) VALUES(?,?,?,?,?,?,?,?,?)")
		if err != nil {
			panic(err.Error())
		}
		defer db.Close()
		res, err := insForm.Exec(plan._id, plan.Seed_RepDate, plan.Seed_Year, plan.Seeds_YearWeek, plan.Seed_Varity, plan.Seed_RDCSD, plan.Seed_Stock2Sale, plan.Seed_Season, plan.Seed_Crop_Year)
		if err != nil {
			fmt.Println(err)
		}

		id, err := res.LastInsertId()

		fmt.Println("Insert id", id)
		defer db.Close()
	}
	totalDataRows := len(csvLines)
	fmt.Println("Total CVS: of rows:", totalDataRows)

}
