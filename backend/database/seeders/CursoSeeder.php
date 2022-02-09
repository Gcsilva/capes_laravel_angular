<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Curso;

class CursoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'nome' => 'ADMINISTRAÇÃO',
                'descricao' => 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO',
                'dt_inicio' => '2022-02-05',
                'dt_fim' => '2022-05-15',
            ],
            [
                'nome' => 'TURISMO',
                'descricao' => 'ADMINISTRAÇÃO PÚBLICA E DE EMPRESAS, CIÊNCIAS CONTÁBEIS E TURISMO',
                'dt_inicio' => '2022-03-01',
                'dt_fim' => '2022-07-20',
            ],
            [
                'nome' => 'ANTROPOLOGIA / ARQUEOLOGIA',
                'descricao' => 'ANTROPOLOGIA / ARQUEOLOGIA',
                'dt_inicio' => '2022-06-01',
                'dt_fim' => '2022-08-20',
            ],
        ];

        foreach ($data as $d) {
            Curso::create($d);
        }
    }
}
