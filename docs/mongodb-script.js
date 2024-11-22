// Connect to the database
// use study-bible-reading-dev

// Create collections
db.createCollection("publishers")
db.createCollection("translations")
db.createCollection("bibles")
db.createCollection("books")
db.createCollection("articles")
db.createCollection("reading_plans")
db.createCollection("full_readings")
db.createCollection("plan_readings")
db.createCollection("partial_readings")
db.createCollection("books_partial_readings")
db.createCollection("users")

// Create indexes
db.bibles.createIndex({ publisherId: 1 })
db.bibles.createIndex({ translationId: 1 })
db.books.createIndex({ bibleId: 1 })
db.articles.createIndex({ bibleId: 1 })
db.full_readings.createIndex({ bibleId: 1 })
// db.full_readings.createIndex({ userId: 1 })
// db.full_readings.createIndex(
//     { bibleId: 1, userId: 1 },
//     { unique: true }
// )
db.plan_readings.createIndex({ readingPlanId: 1 })
// db.plan_readings.createIndex({ userId: 1 })
// db.plan_readings.createIndex(
//     { readingPlanId: 1, userId: 1 },
//     { unique: true }
// )
//db.partial_readings.createIndex({ userId: 1 })
db.books_partial_readings.createIndex({ bookId: 1 })
db.books_partial_readings.createIndex({ partialPlanId: 1 })
db.books_partial_readings.createIndex(
    { bookId: 1, partialPlanId: 1 },
    { unique: true }
)

// Insert sample data

//User
// db.users.insertOne({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "password"
// })

// Publisher
db.publishers.insertOne({
    name: "Sociedade Bíblica do Brasil",
    //bibles: []
})

// Translation
db.translations.insertOne({
    description: "Nova Almeida Atualizada",
    acronym: "NAA",
    tradition: "Protestant",
    //bibles: []
})

// Bible
db.bibles.insertOne({
    title: "Bíblia de Estudo NAA",
    publisherId: db.publishers.findOne()._id,
    translationId: db.translations.findOne()._id,
    pages: 2880,
    isStudy: true,
    readingQuantity: 0,
    books: [],
    articles: []
})

// Book
db.books.insertOne({
    bibleId: db.bibles.findOne()._id,
    name: "Gênesis",
    abbreviation: "Gn",
    testament: "Old",
    classification: "Pentateuch",
    sequenceInBible: 7,
    chapters: [
        { chapter: 1, isRead: false },
        { chapter: 2, isRead: false },
        { chapter: 3, isRead: false },
        { chapter: 4, isRead: false },
        { chapter: 5, isRead: false },
        { chapter: 6, isRead: false },
        { chapter: 7, isRead: false },
        { chapter: 8, isRead: false },
        { chapter: 9, isRead: false },
        { chapter: 10, isRead: false },
        { chapter: 11, isRead: false },
        { chapter: 12, isRead: false },
        { chapter: 13, isRead: false },
        { chapter: 14, isRead: false },
        { chapter: 15, isRead: false },
        { chapter: 16, isRead: false },
        { chapter: 17, isRead: false },
        { chapter: 18, isRead: false },
        { chapter: 19, isRead: false },
        { chapter: 20, isRead: false },
        { chapter: 21, isRead: false },
        { chapter: 22, isRead: false },
        { chapter: 23, isRead: false },
        { chapter: 24, isRead: false },
        { chapter: 25, isRead: false },
        { chapter: 26, isRead: false },
        { chapter: 27, isRead: false },
        { chapter: 28, isRead: false },
        { chapter: 29, isRead: false },
        { chapter: 30, isRead: false },
        { chapter: 31, isRead: false },
        { chapter: 32, isRead: false },
        { chapter: 33, isRead: false },
        { chapter: 34, isRead: false },
        { chapter: 35, isRead: false },
        { chapter: 36, isRead: false },
        { chapter: 37, isRead: false },
        { chapter: 38, isRead: false },
        { chapter: 39, isRead: false },
        { chapter: 40, isRead: false },
        { chapter: 41, isRead: false },
        { chapter: 42, isRead: false },
        { chapter: 43, isRead: false },
        { chapter: 44, isRead: false },
        { chapter: 45, isRead: false },
        { chapter: 46, isRead: false },
        { chapter: 47, isRead: false },
        { chapter: 48, isRead: false },
        { chapter: 49, isRead: false },
        { chapter: 50, isRead: false }
    ],
    readingQuantity: 0
})

// Article
db.articles.insertOne({
    bibleId: db.bibles.findOne()._id,
    name: "Introdução",
    classification: "Introduction",
    sequenceInBible: 1,
    isRead: false
})

// Reading Plan
db.reading_plans.insertOne({
    name: "Plano de leitura de Robert Roberts",
    description: "No plano de Robert Roberts são lidas diariamente porções do Antigo e do Novo Testamentos, e, ao final de um ano, o Novo Testamento terá sido lido duas vezes",
    tradition: "Protestant",
    items: [
        {
            date: new Date("2025-01-01T00:00:00Z"),
            description: "Gn 1-2; Sl 1-2; Mt 1-2",
            chapters: [
                { abbreviation: "Gn", chapter: 1 },
                { abbreviation: "Gn", chapter: 2 },
                { abbreviation: "Sl", chapter: 1 },
                { abbreviation: "Sl", chapter: 2 },
                { abbreviation: "Mt", chapter: 1 },
                { abbreviation: "Mt", chapter: 2 },
            ],
            isRead: false
        }
    ],
    durationInDays: 365,
    durationInMonths: 12,
    durationInYears: 1
})

// Full Reading
db.full_readings.insertOne({
    startDate: new Date("2022-11-08T00:00:00Z"),
    expectedEndDate: null,
    endDate: null,
    completed: false,
    bibleId: db.bibles.findOne()._id,
    // userId: db.users.findOne()._id
})

// Plan Reading
db.plan_readings.insertOne({
    startDate: new Date("2025-01-01T00:00:00Z"),
    expectedEndDate: new Date("2025-12-31T00:00:00Z"),
    endDate: null,
    completed: false,
    readingPlanId: db.reading_plans.findOne()._id,
    // userId: db.users.findOne()._id
})

// Partial Reading
db.partial_readings.insertOne({
    startDate: new Date("2025-01-01T00:00:00Z"),
    expectedEndDate: new Date("2025-01-31T00:00:00Z"),
    endDate: null,
    completed: false,
    books: [db.books.findOne()._id],
    // userId: db.users.findOne()._id
})

// Books Partial Reading (intermediate collection)
db.books_partial_readings.insertOne({
    bookId: db.books.findOne()._id,
    partialPlanId: db.partial_readings.findOne()._id
})

print("Database initialization complete!")