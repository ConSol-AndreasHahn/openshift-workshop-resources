# openshift-workshop-resources

## Copy files or clone repository
* You only need files in workshop-app-k8s and file "term-message.deployment.yaml"

## Solutions
* Watch and review solutions rather in OpenShift cluster and not in here
* Solutions are rolled out via FluxCD, so for example helm chart are applied differently

## Workshop-Environment
* OpenShift Console: https://console-openshift-console.apps.cluster-vgcmd.dynamic.redhatworkshops.io
* OpenShift API: https://api.cluster-vgcmd.dynamic.redhatworkshops.io:6443


Curl für Health-Checks
curl -X POST https://$ROUTE/api/health -H "Content-Type: application/json" -d '{"healthy": false}'

Oder mit http und localhost:8080 wenn ihr über port-forward arbeitet
