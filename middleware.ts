export { default } from 'next-auth/middleware';

export const config={
 matcher:['/admin/:path*','/ProposalSubmit','/auth','/ProofSubmit','/api/:path*'],  
}


