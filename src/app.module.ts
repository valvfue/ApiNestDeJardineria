import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule,
         AuthModule, ProfileModule } from './modules/index';
import { SeedModule } from './modules/seed/seed.module';
import { GamasModule } from './modules/gamas/gamas.module';
import { ProductosModule } from './modules/productos/productos.module';
@Module({
  imports: [ 
    // ClientesModule,

    GamasModule,
    ProductosModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true
    }),
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
