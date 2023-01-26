# INtellipaat Demo

### Commands

```bash
docker image build -t akilan/frontend-react:v1 .

kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
kubectl port-forward svc/argocd-server -n argocd 8080:443
```
