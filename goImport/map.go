package main

import (
	"database/sql"
	"encoding/csv"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"os"
)

type planDatas struct {
	province    string
	district    string
	subdistrict string
	zipcode     string
	latitude    string
	longitude   string
}

func main() {

	csvFile, err := os.Open("map.csv")
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
		plan := planDatas{
			province:    line[0],
			district:    line[1],
			subdistrict: line[2],
			zipcode:     line[3],
			latitude:    line[4],
			longitude:   line[5],
		}
		fmt.Println(plan.province + " , " + plan.district + " , " + plan.subdistrict + " , " + plan.zipcode + " , " + plan.latitude + " , " + plan.longitude)
		fmt.Println("Go lang Insert")

		db, err := sql.Open("mysql", "root:#Iris@2013@tcp(127.0.0.1:3306)/pretest")
		defer db.Close()
		if err != nil {
			panic(err.Error())
		}
		defer db.Close()

		insForm, err := db.Prepare("INSERT INTO tbl_pretest(province, district, subdistrict, zipcode, latitude, longitude) VALUES(?,?,?,?,?,?)")
		if err != nil {
			panic(err.Error())
		}
		defer db.Close()
		res, err := insForm.Exec(plan.province, plan.district, plan.subdistrict, plan.zipcode, plan.latitude, plan.longitude)
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
