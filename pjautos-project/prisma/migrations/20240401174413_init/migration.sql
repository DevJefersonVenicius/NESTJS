-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "cpf" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "car_model" TEXT NOT NULL,
    "car_brand" TEXT NOT NULL,
    "car_price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car_enjoy" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_car" INTEGER NOT NULL,

    CONSTRAINT "car_enjoy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_cpf_key" ON "user"("cpf");
