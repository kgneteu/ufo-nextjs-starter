package main

import (
	"fmt"
	"github.com/go-faker/faker/v4"
	"gorm.io/gorm"
	"log"
	"math/rand"
	"server/models"
	"time"
)

func ProdSeed(tx *gorm.DB, u *models.User) {
	admin := models.User{}
	admin.Email = "admin@admin.com"
	admin.FirstName = "John"
	admin.LastName = "Admin"
	admin.Verified = true
	admin.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	admin.Role = "admin"
	//admin.Parent = models.User{}
	res := tx.Create(&admin)
	if res.Error != nil {
		log.Fatal(res.Error)
	}
}

func Seed(tx *gorm.DB, u *models.User) {
	//admin ID=1
	admin := models.User{}
	admin.Email = "admin@admin.com"
	admin.FirstName = "John"
	admin.LastName = "Admin"
	admin.Verified = true
	admin.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	admin.Role = "admin"
	//admin.Parent = models.User{}
	res := tx.Create(&admin)
	if res.Error != nil {
		log.Fatal(res.Error)
	}
	//parent ID=2 parent with 1 kid
	parent2 := models.User{}
	parent2.Email = "parent@parent.com"
	parent2.FirstName = "Adam"
	parent2.LastName = "Parent"
	parent2.Verified = true
	parent2.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	parent2.Role = "parent"
	res = tx.Create(&parent2)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//parent with no kids ID=3
	parent3 := models.User{}
	parent3.Email = "parent3@parent.com"
	parent3.FirstName = "Adam"
	parent3.LastName = "Empty"
	parent3.Verified = true
	parent3.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	parent3.Role = "parent"
	res = tx.Create(&parent3)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//parent with 500 kids ID=4
	parent4 := models.User{}
	parent4.Email = "parent2@parent.com"
	parent4.FirstName = "Adam"
	parent4.LastName = "Full"
	parent4.Verified = true
	parent4.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	parent4.Role = "parent"
	res = tx.Create(&parent4)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//kid ID=5 - empty for parent 2
	kid2 := models.User{}
	kid2.Email = "kid2@kid.com"
	kid2.FirstName = "Monica"
	kid2.LastName = "Empty"
	kid2.Verified = true
	kid2.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	kid2.Role = "kid"
	var pid uint = 2
	kid2.ParentId = &pid
	res = tx.Create(&kid2)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//kid ID=6 - kid for parent 2
	kid := models.User{}
	kid.Email = "kid@kid.com"
	kid.FirstName = "Simon"
	kid.LastName = "Full"
	kid.Verified = true
	kid.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
	kid.Role = "kid"
	kid.Points = 500
	pid = 2
	kid.ParentId = &pid
	res = tx.Create(&kid)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//Kids of parent 4 (ID=6-505) & parents ID: 506-1005
	var users []models.User
	pid = 4
	for i := 0; i < 1000; i++ {
		user := models.User{}
		err := faker.FakeData(&user)
		if err != nil {
			fmt.Println(err)
		}
		user.Password = "$2a$10$pYs2rPQYL7vrYVB/i07WfuHVrGVdEbllPLZAr7IUUWzOqKgOnpvmu"
		if i < 500 {
			user.Role = "kid"

			user.ParentId = &pid
		} else {
			user.Role = "parent"
		}
		users = append(users, user)
		fmt.Println(user)
	}
	res = tx.Create(&users)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//prizes
	var prizes []models.Prize

	for i := 6; i < 26; i++ {
		for k := 0; k < 20; k++ {
			prize := models.Prize{}
			err := faker.FakeData(&prize)
			if err != nil {
				fmt.Println(err)
			}
			prize.KidId = uint(i)
			prizes = append(prizes, prize)
			fmt.Println(prize)
		}
	}

	res = tx.Create(&prizes)
	if res.Error != nil {
		log.Fatal(res.Error)
	}

	//tasks
	var tasks []models.Task
	for i := 6; i < 26; i++ {
		for k := 0; k < 80; k++ {
			task := models.Task{}
			err := faker.FakeData(&task)
			if err != nil {
				fmt.Println(err)
			}
			task.KidId = uint(i)

			d := rand.Int63n(40) - 15
			t := time.Now().Add(time.Hour * 24 * time.Duration(d))
			h := rand.Int63n(5) + 15
			nd := time.Date(t.Year(), t.Month(), t.Day(), int(h), 0, 0, 0, time.UTC)
			task.StartAt = nd
			tasks = append(tasks, task)
			fmt.Println(task)
		}
	}

	res = tx.Create(&tasks)
	if res.Error != nil {
		log.Fatal(res.Error)
	}
	//fmt.Printf("%+v", user)
}
