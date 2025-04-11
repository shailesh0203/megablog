import conf from '..conf.js'
import { Client,ID,Databases,Storage,query } from 'appwrite'

export class Service{
client=new Client();
databases;
bucket;

constructor(){
    this.client
     .setEndpoint(conf.appwriteUrl)
     .setProject(conf.appwriteProjectId)
    this.account=new Account(this.client)
}
}
const service =new Service()
export default service