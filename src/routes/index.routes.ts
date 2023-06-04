import { Request, Response } from 'express';
import { Router } from 'express';

const indexRouter = Router();

indexRouter.use('/storage', (req: Request, res: Response) => {
  res.send('Rota de manejar o estoque de produtos');
});

indexRouter.use('/clients', (req: Request, res: Response) => {
  res.send('Rota de manejar os clientes');
});

indexRouter.use('/reports', (req: Request, res: Response) => {
  res.send('Rota de manejar os relatórios');
});

indexRouter.use('/sales', (req: Request, res: Response) => {
  res.send('Rota de manejar as vendas');
});

indexRouter.use('/messages', (req: Request, res: Response) => {
  res.send('Rota de manejar o envio de mensagens aos clientes');
});

indexRouter.use('/storage', (req: Request, res: Response) => {
  res.send('Rota de manejar o histórico de saidas e entradas');
});

indexRouter.use('/salesControl', (req: Request, res: Response) => {
  res.send('Rota de manejar o controle de vendas');
});

export default indexRouter;
