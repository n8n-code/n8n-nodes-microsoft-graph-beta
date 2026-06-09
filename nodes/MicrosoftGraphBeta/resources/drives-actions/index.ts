import type { INodeProperties } from 'n8n-workflow';

export const drivesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					]
				}
			},
			"options": [
				{
					"name": "Drives Drive Items Drive Item Assign Sensitivity Label",
					"value": "Drives Drive Items Drive Item Assign Sensitivity Label",
					"action": "Invoke action assignSensitivityLabel",
					"description": "Invoke action assignSensitivityLabel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.assignSensitivityLabel"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Checkin",
					"value": "Drives Drive Items Drive Item Checkin",
					"action": "Invoke action checkin",
					"description": "Check in a checked out **driveItem** resource, which makes the version of the document available to others.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.checkin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Checkout",
					"value": "Drives Drive Items Drive Item Checkout",
					"action": "Invoke action checkout",
					"description": "Check out a **driveItem** resource to prevent others from editing the document, and prevent your changes from being visible until the documented is checked in.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.checkout"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Copy",
					"value": "Drives Drive Items Drive Item Copy",
					"action": "Invoke action copy",
					"description": "Asynchronously creates a copy of an [driveItem][item-resource] (including any children), under a new parent item or with a new name.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.copy"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Create Link",
					"value": "Drives Drive Items Drive Item Create Link",
					"action": "Invoke action createLink",
					"description": "You can use **createLink** action to share a driveItem via a sharing link. The **createLink** action will create a new sharing link if the specified link type doesn't already exist for the calling application.\nIf a sharing link of the specified type already exists for the app, the existing sharing link will be returned. DriveItem resources inherit sharing permissions from their ancestors.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.createLink"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Create Upload Session",
					"value": "Drives Drive Items Drive Item Create Upload Session",
					"action": "Invoke action createUploadSession",
					"description": "Invoke action createUploadSession",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.createUploadSession"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Extract Sensitivity Labels",
					"value": "Drives Drive Items Drive Item Extract Sensitivity Labels",
					"action": "Invoke action extractSensitivityLabels",
					"description": "Invoke action extractSensitivityLabels",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.extractSensitivityLabels"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Follow",
					"value": "Drives Drive Items Drive Item Follow",
					"action": "Invoke action follow",
					"description": "Follow a driveItem.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.follow"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Invite",
					"value": "Drives Drive Items Drive Item Invite",
					"action": "Invoke action invite",
					"description": "Sends a sharing invitation for a **DriveItem**.\nA sharing invitation provides permissions to the recipients and optionally sends an email to the recipients to notify them the item was shared.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.invite"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Preview",
					"value": "Drives Drive Items Drive Item Preview",
					"action": "Invoke action preview",
					"description": "Invoke action preview",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.preview"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Restore",
					"value": "Drives Drive Items Drive Item Restore",
					"action": "Invoke action restore",
					"description": "Restore a driveItem that has been deleted and is currently in the recycle bin. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Unfollow",
					"value": "Drives Drive Items Drive Item Unfollow",
					"action": "Invoke action unfollow",
					"description": "Unfollow a driveItem.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.unfollow"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Validate Permission",
					"value": "Drives Drive Items Drive Item Validate Permission",
					"action": "Invoke action validatePermission",
					"description": "Invoke action validatePermission",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/microsoft.graph.validatePermission"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Permissions Permission Grant",
					"value": "Drives Drive Items Drive Item Permissions Permission Grant",
					"action": "Invoke action grant",
					"description": "Grant users access to a link represented by a [permission][].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}/microsoft.graph.grant"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Permissions Permission Revoke Grants",
					"value": "Drives Drive Items Drive Item Permissions Permission Revoke Grants",
					"action": "Invoke action revokeGrants",
					"description": "Revoke access to a [listItem][] or [driveItem][] granted via a sharing link by removing the specified [recipient][] from the link.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/permissions/{{$parameter[\"permission-id\"]}}/microsoft.graph.revokeGrants"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Subscriptions Subscription Reauthorize",
					"value": "Drives Drive Items Drive Item Subscriptions Subscription Reauthorize",
					"action": "Invoke action reauthorize",
					"description": "Invoke action reauthorize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/subscriptions/{{$parameter[\"subscription-id\"]}}/microsoft.graph.reauthorize"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Versions Drive Item Version Restore Version",
					"value": "Drives Drive Items Drive Item Versions Drive Item Version Restore Version",
					"action": "Invoke action restoreVersion",
					"description": "Restore a previous version of a DriveItem to be the current version. This will create a new version with the contents of the previous version, but preserves all existing versions of the file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/versions/{{$parameter[\"driveItemVersion-id\"]}}/microsoft.graph.restoreVersion"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Application Calculate",
					"value": "Drives Drive Items Drive Item Workbook Application Calculate",
					"action": "Invoke action calculate",
					"description": "Recalculate all currently opened workbooks in Excel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/application/microsoft.graph.calculate"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Abs",
					"value": "Drives Drive Items Drive Item Workbook Functions Abs",
					"action": "Invoke action abs",
					"description": "Invoke action abs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.abs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Accr Int",
					"value": "Drives Drive Items Drive Item Workbook Functions Accr Int",
					"action": "Invoke action accrInt",
					"description": "Invoke action accrInt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.accrInt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Accr Int M",
					"value": "Drives Drive Items Drive Item Workbook Functions Accr Int M",
					"action": "Invoke action accrIntM",
					"description": "Invoke action accrIntM",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.accrIntM"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Acos",
					"value": "Drives Drive Items Drive Item Workbook Functions Acos",
					"action": "Invoke action acos",
					"description": "Invoke action acos",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.acos"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Acosh",
					"value": "Drives Drive Items Drive Item Workbook Functions Acosh",
					"action": "Invoke action acosh",
					"description": "Invoke action acosh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.acosh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Acot",
					"value": "Drives Drive Items Drive Item Workbook Functions Acot",
					"action": "Invoke action acot",
					"description": "Invoke action acot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.acot"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Acoth",
					"value": "Drives Drive Items Drive Item Workbook Functions Acoth",
					"action": "Invoke action acoth",
					"description": "Invoke action acoth",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.acoth"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Amor Degrc",
					"value": "Drives Drive Items Drive Item Workbook Functions Amor Degrc",
					"action": "Invoke action amorDegrc",
					"description": "Invoke action amorDegrc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.amorDegrc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Amor Linc",
					"value": "Drives Drive Items Drive Item Workbook Functions Amor Linc",
					"action": "Invoke action amorLinc",
					"description": "Invoke action amorLinc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.amorLinc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions And",
					"value": "Drives Drive Items Drive Item Workbook Functions And",
					"action": "Invoke action and",
					"description": "Invoke action and",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.and"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Arabic",
					"value": "Drives Drive Items Drive Item Workbook Functions Arabic",
					"action": "Invoke action arabic",
					"description": "Invoke action arabic",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.arabic"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Areas",
					"value": "Drives Drive Items Drive Item Workbook Functions Areas",
					"action": "Invoke action areas",
					"description": "Invoke action areas",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.areas"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Asc",
					"value": "Drives Drive Items Drive Item Workbook Functions Asc",
					"action": "Invoke action asc",
					"description": "Invoke action asc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.asc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Asin",
					"value": "Drives Drive Items Drive Item Workbook Functions Asin",
					"action": "Invoke action asin",
					"description": "Invoke action asin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.asin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Asinh",
					"value": "Drives Drive Items Drive Item Workbook Functions Asinh",
					"action": "Invoke action asinh",
					"description": "Invoke action asinh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.asinh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Atan",
					"value": "Drives Drive Items Drive Item Workbook Functions Atan",
					"action": "Invoke action atan",
					"description": "Invoke action atan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.atan"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Atan 2",
					"value": "Drives Drive Items Drive Item Workbook Functions Atan 2",
					"action": "Invoke action atan2",
					"description": "Invoke action atan2",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.atan2"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Atanh",
					"value": "Drives Drive Items Drive Item Workbook Functions Atanh",
					"action": "Invoke action atanh",
					"description": "Invoke action atanh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.atanh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ave Dev",
					"value": "Drives Drive Items Drive Item Workbook Functions Ave Dev",
					"action": "Invoke action aveDev",
					"description": "Invoke action aveDev",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.aveDev"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Average",
					"value": "Drives Drive Items Drive Item Workbook Functions Average",
					"action": "Invoke action average",
					"description": "Invoke action average",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.average"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Average A",
					"value": "Drives Drive Items Drive Item Workbook Functions Average A",
					"action": "Invoke action averageA",
					"description": "Invoke action averageA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.averageA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Average If",
					"value": "Drives Drive Items Drive Item Workbook Functions Average If",
					"action": "Invoke action averageIf",
					"description": "Invoke action averageIf",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.averageIf"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Average Ifs",
					"value": "Drives Drive Items Drive Item Workbook Functions Average Ifs",
					"action": "Invoke action averageIfs",
					"description": "Invoke action averageIfs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.averageIfs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Baht Text",
					"value": "Drives Drive Items Drive Item Workbook Functions Baht Text",
					"action": "Invoke action bahtText",
					"description": "Invoke action bahtText",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bahtText"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Base",
					"value": "Drives Drive Items Drive Item Workbook Functions Base",
					"action": "Invoke action base",
					"description": "Invoke action base",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.base"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bessel I",
					"value": "Drives Drive Items Drive Item Workbook Functions Bessel I",
					"action": "Invoke action besselI",
					"description": "Invoke action besselI",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.besselI"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bessel J",
					"value": "Drives Drive Items Drive Item Workbook Functions Bessel J",
					"action": "Invoke action besselJ",
					"description": "Invoke action besselJ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.besselJ"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bessel K",
					"value": "Drives Drive Items Drive Item Workbook Functions Bessel K",
					"action": "Invoke action besselK",
					"description": "Invoke action besselK",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.besselK"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bessel Y",
					"value": "Drives Drive Items Drive Item Workbook Functions Bessel Y",
					"action": "Invoke action besselY",
					"description": "Invoke action besselY",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.besselY"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Beta Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Beta Dist",
					"action": "Invoke action beta_Dist",
					"description": "Invoke action beta_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.beta_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Beta Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Beta Inv",
					"action": "Invoke action beta_Inv",
					"description": "Invoke action beta_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.beta_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bin 2 Dec",
					"value": "Drives Drive Items Drive Item Workbook Functions Bin 2 Dec",
					"action": "Invoke action bin2Dec",
					"description": "Invoke action bin2Dec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bin2Dec"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bin 2 Hex",
					"value": "Drives Drive Items Drive Item Workbook Functions Bin 2 Hex",
					"action": "Invoke action bin2Hex",
					"description": "Invoke action bin2Hex",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bin2Hex"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bin 2 Oct",
					"value": "Drives Drive Items Drive Item Workbook Functions Bin 2 Oct",
					"action": "Invoke action bin2Oct",
					"description": "Invoke action bin2Oct",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bin2Oct"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Binom Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Binom Dist",
					"action": "Invoke action binom_Dist",
					"description": "Invoke action binom_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.binom_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Binom Dist Range",
					"value": "Drives Drive Items Drive Item Workbook Functions Binom Dist Range",
					"action": "Invoke action binom_Dist_Range",
					"description": "Invoke action binom_Dist_Range",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.binom_Dist_Range"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Binom Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Binom Inv",
					"action": "Invoke action binom_Inv",
					"description": "Invoke action binom_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.binom_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bitand",
					"value": "Drives Drive Items Drive Item Workbook Functions Bitand",
					"action": "Invoke action bitand",
					"description": "Invoke action bitand",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bitand"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bitlshift",
					"value": "Drives Drive Items Drive Item Workbook Functions Bitlshift",
					"action": "Invoke action bitlshift",
					"description": "Invoke action bitlshift",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bitlshift"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bitor",
					"value": "Drives Drive Items Drive Item Workbook Functions Bitor",
					"action": "Invoke action bitor",
					"description": "Invoke action bitor",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bitor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bitrshift",
					"value": "Drives Drive Items Drive Item Workbook Functions Bitrshift",
					"action": "Invoke action bitrshift",
					"description": "Invoke action bitrshift",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bitrshift"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Bitxor",
					"value": "Drives Drive Items Drive Item Workbook Functions Bitxor",
					"action": "Invoke action bitxor",
					"description": "Invoke action bitxor",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.bitxor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ceiling Math",
					"value": "Drives Drive Items Drive Item Workbook Functions Ceiling Math",
					"action": "Invoke action ceiling_Math",
					"description": "Invoke action ceiling_Math",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ceiling_Math"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ceiling Precise",
					"value": "Drives Drive Items Drive Item Workbook Functions Ceiling Precise",
					"action": "Invoke action ceiling_Precise",
					"description": "Invoke action ceiling_Precise",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ceiling_Precise"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Char",
					"value": "Drives Drive Items Drive Item Workbook Functions Char",
					"action": "Invoke action char",
					"description": "Invoke action char",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.char"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Chi Sq Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Chi Sq Dist",
					"action": "Invoke action chiSq_Dist",
					"description": "Invoke action chiSq_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.chiSq_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Chi Sq Dist RT",
					"value": "Drives Drive Items Drive Item Workbook Functions Chi Sq Dist RT",
					"action": "Invoke action chiSq_Dist_RT",
					"description": "Invoke action chiSq_Dist_RT",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.chiSq_Dist_RT"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Chi Sq Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Chi Sq Inv",
					"action": "Invoke action chiSq_Inv",
					"description": "Invoke action chiSq_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.chiSq_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Chi Sq Inv RT",
					"value": "Drives Drive Items Drive Item Workbook Functions Chi Sq Inv RT",
					"action": "Invoke action chiSq_Inv_RT",
					"description": "Invoke action chiSq_Inv_RT",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.chiSq_Inv_RT"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Choose",
					"value": "Drives Drive Items Drive Item Workbook Functions Choose",
					"action": "Invoke action choose",
					"description": "Invoke action choose",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.choose"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Clean",
					"value": "Drives Drive Items Drive Item Workbook Functions Clean",
					"action": "Invoke action clean",
					"description": "Invoke action clean",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.clean"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Code",
					"value": "Drives Drive Items Drive Item Workbook Functions Code",
					"action": "Invoke action code",
					"description": "Invoke action code",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.code"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Columns",
					"value": "Drives Drive Items Drive Item Workbook Functions Columns",
					"action": "Invoke action columns",
					"description": "Invoke action columns",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.columns"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Combin",
					"value": "Drives Drive Items Drive Item Workbook Functions Combin",
					"action": "Invoke action combin",
					"description": "Invoke action combin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.combin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Combina",
					"value": "Drives Drive Items Drive Item Workbook Functions Combina",
					"action": "Invoke action combina",
					"description": "Invoke action combina",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.combina"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Complex",
					"value": "Drives Drive Items Drive Item Workbook Functions Complex",
					"action": "Invoke action complex",
					"description": "Invoke action complex",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.complex"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Concatenate",
					"value": "Drives Drive Items Drive Item Workbook Functions Concatenate",
					"action": "Invoke action concatenate",
					"description": "Invoke action concatenate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.concatenate"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Confidence Norm",
					"value": "Drives Drive Items Drive Item Workbook Functions Confidence Norm",
					"action": "Invoke action confidence_Norm",
					"description": "Invoke action confidence_Norm",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.confidence_Norm"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Confidence T",
					"value": "Drives Drive Items Drive Item Workbook Functions Confidence T",
					"action": "Invoke action confidence_T",
					"description": "Invoke action confidence_T",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.confidence_T"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Convert",
					"value": "Drives Drive Items Drive Item Workbook Functions Convert",
					"action": "Invoke action convert",
					"description": "Invoke action convert",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.convert"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Cos",
					"value": "Drives Drive Items Drive Item Workbook Functions Cos",
					"action": "Invoke action cos",
					"description": "Invoke action cos",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.cos"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Cosh",
					"value": "Drives Drive Items Drive Item Workbook Functions Cosh",
					"action": "Invoke action cosh",
					"description": "Invoke action cosh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.cosh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Cot",
					"value": "Drives Drive Items Drive Item Workbook Functions Cot",
					"action": "Invoke action cot",
					"description": "Invoke action cot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.cot"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coth",
					"value": "Drives Drive Items Drive Item Workbook Functions Coth",
					"action": "Invoke action coth",
					"description": "Invoke action coth",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coth"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Count",
					"value": "Drives Drive Items Drive Item Workbook Functions Count",
					"action": "Invoke action count",
					"description": "Invoke action count",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.count"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Count A",
					"value": "Drives Drive Items Drive Item Workbook Functions Count A",
					"action": "Invoke action countA",
					"description": "Invoke action countA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.countA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Count Blank",
					"value": "Drives Drive Items Drive Item Workbook Functions Count Blank",
					"action": "Invoke action countBlank",
					"description": "Invoke action countBlank",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.countBlank"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Count If",
					"value": "Drives Drive Items Drive Item Workbook Functions Count If",
					"action": "Invoke action countIf",
					"description": "Invoke action countIf",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.countIf"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Count Ifs",
					"value": "Drives Drive Items Drive Item Workbook Functions Count Ifs",
					"action": "Invoke action countIfs",
					"description": "Invoke action countIfs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.countIfs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coup Day Bs",
					"value": "Drives Drive Items Drive Item Workbook Functions Coup Day Bs",
					"action": "Invoke action coupDayBs",
					"description": "Invoke action coupDayBs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coupDayBs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coup Days",
					"value": "Drives Drive Items Drive Item Workbook Functions Coup Days",
					"action": "Invoke action coupDays",
					"description": "Invoke action coupDays",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coupDays"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coup Days Nc",
					"value": "Drives Drive Items Drive Item Workbook Functions Coup Days Nc",
					"action": "Invoke action coupDaysNc",
					"description": "Invoke action coupDaysNc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coupDaysNc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coup Ncd",
					"value": "Drives Drive Items Drive Item Workbook Functions Coup Ncd",
					"action": "Invoke action coupNcd",
					"description": "Invoke action coupNcd",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coupNcd"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coup Num",
					"value": "Drives Drive Items Drive Item Workbook Functions Coup Num",
					"action": "Invoke action coupNum",
					"description": "Invoke action coupNum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coupNum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Coup Pcd",
					"value": "Drives Drive Items Drive Item Workbook Functions Coup Pcd",
					"action": "Invoke action coupPcd",
					"description": "Invoke action coupPcd",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.coupPcd"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Csc",
					"value": "Drives Drive Items Drive Item Workbook Functions Csc",
					"action": "Invoke action csc",
					"description": "Invoke action csc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.csc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Csch",
					"value": "Drives Drive Items Drive Item Workbook Functions Csch",
					"action": "Invoke action csch",
					"description": "Invoke action csch",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.csch"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Cum I Pmt",
					"value": "Drives Drive Items Drive Item Workbook Functions Cum I Pmt",
					"action": "Invoke action cumIPmt",
					"description": "Invoke action cumIPmt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.cumIPmt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Cum Princ",
					"value": "Drives Drive Items Drive Item Workbook Functions Cum Princ",
					"action": "Invoke action cumPrinc",
					"description": "Invoke action cumPrinc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.cumPrinc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Date",
					"value": "Drives Drive Items Drive Item Workbook Functions Date",
					"action": "Invoke action date",
					"description": "Invoke action date",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.date"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Datevalue",
					"value": "Drives Drive Items Drive Item Workbook Functions Datevalue",
					"action": "Invoke action datevalue",
					"description": "Invoke action datevalue",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.datevalue"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Daverage",
					"value": "Drives Drive Items Drive Item Workbook Functions Daverage",
					"action": "Invoke action daverage",
					"description": "Invoke action daverage",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.daverage"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Day",
					"value": "Drives Drive Items Drive Item Workbook Functions Day",
					"action": "Invoke action day",
					"description": "Invoke action day",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.day"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Days",
					"value": "Drives Drive Items Drive Item Workbook Functions Days",
					"action": "Invoke action days",
					"description": "Invoke action days",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.days"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Days 360",
					"value": "Drives Drive Items Drive Item Workbook Functions Days 360",
					"action": "Invoke action days360",
					"description": "Invoke action days360",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.days360"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions DB",
					"value": "Drives Drive Items Drive Item Workbook Functions DB",
					"action": "Invoke action db",
					"description": "Invoke action db",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.db"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dbcs",
					"value": "Drives Drive Items Drive Item Workbook Functions Dbcs",
					"action": "Invoke action dbcs",
					"description": "Invoke action dbcs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dbcs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dcount",
					"value": "Drives Drive Items Drive Item Workbook Functions Dcount",
					"action": "Invoke action dcount",
					"description": "Invoke action dcount",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dcount"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dcount A",
					"value": "Drives Drive Items Drive Item Workbook Functions Dcount A",
					"action": "Invoke action dcountA",
					"description": "Invoke action dcountA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dcountA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ddb",
					"value": "Drives Drive Items Drive Item Workbook Functions Ddb",
					"action": "Invoke action ddb",
					"description": "Invoke action ddb",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ddb"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dec 2 Bin",
					"value": "Drives Drive Items Drive Item Workbook Functions Dec 2 Bin",
					"action": "Invoke action dec2Bin",
					"description": "Invoke action dec2Bin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dec2Bin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dec 2 Hex",
					"value": "Drives Drive Items Drive Item Workbook Functions Dec 2 Hex",
					"action": "Invoke action dec2Hex",
					"description": "Invoke action dec2Hex",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dec2Hex"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dec 2 Oct",
					"value": "Drives Drive Items Drive Item Workbook Functions Dec 2 Oct",
					"action": "Invoke action dec2Oct",
					"description": "Invoke action dec2Oct",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dec2Oct"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Decimal",
					"value": "Drives Drive Items Drive Item Workbook Functions Decimal",
					"action": "Invoke action decimal",
					"description": "Invoke action decimal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.decimal"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Degrees",
					"value": "Drives Drive Items Drive Item Workbook Functions Degrees",
					"action": "Invoke action degrees",
					"description": "Invoke action degrees",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.degrees"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Delta",
					"value": "Drives Drive Items Drive Item Workbook Functions Delta",
					"action": "Invoke action delta",
					"description": "Invoke action delta",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.delta"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dev Sq",
					"value": "Drives Drive Items Drive Item Workbook Functions Dev Sq",
					"action": "Invoke action devSq",
					"description": "Invoke action devSq",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.devSq"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dget",
					"value": "Drives Drive Items Drive Item Workbook Functions Dget",
					"action": "Invoke action dget",
					"description": "Invoke action dget",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dget"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Disc",
					"value": "Drives Drive Items Drive Item Workbook Functions Disc",
					"action": "Invoke action disc",
					"description": "Invoke action disc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.disc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dmax",
					"value": "Drives Drive Items Drive Item Workbook Functions Dmax",
					"action": "Invoke action dmax",
					"description": "Invoke action dmax",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dmax"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dmin",
					"value": "Drives Drive Items Drive Item Workbook Functions Dmin",
					"action": "Invoke action dmin",
					"description": "Invoke action dmin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dmin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dollar",
					"value": "Drives Drive Items Drive Item Workbook Functions Dollar",
					"action": "Invoke action dollar",
					"description": "Invoke action dollar",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dollar"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dollar De",
					"value": "Drives Drive Items Drive Item Workbook Functions Dollar De",
					"action": "Invoke action dollarDe",
					"description": "Invoke action dollarDe",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dollarDe"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dollar Fr",
					"value": "Drives Drive Items Drive Item Workbook Functions Dollar Fr",
					"action": "Invoke action dollarFr",
					"description": "Invoke action dollarFr",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dollarFr"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dproduct",
					"value": "Drives Drive Items Drive Item Workbook Functions Dproduct",
					"action": "Invoke action dproduct",
					"description": "Invoke action dproduct",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dproduct"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dst Dev",
					"value": "Drives Drive Items Drive Item Workbook Functions Dst Dev",
					"action": "Invoke action dstDev",
					"description": "Invoke action dstDev",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dstDev"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dst Dev P",
					"value": "Drives Drive Items Drive Item Workbook Functions Dst Dev P",
					"action": "Invoke action dstDevP",
					"description": "Invoke action dstDevP",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dstDevP"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dsum",
					"value": "Drives Drive Items Drive Item Workbook Functions Dsum",
					"action": "Invoke action dsum",
					"description": "Invoke action dsum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dsum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Duration",
					"value": "Drives Drive Items Drive Item Workbook Functions Duration",
					"action": "Invoke action duration",
					"description": "Invoke action duration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.duration"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dvar",
					"value": "Drives Drive Items Drive Item Workbook Functions Dvar",
					"action": "Invoke action dvar",
					"description": "Invoke action dvar",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dvar"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Dvar P",
					"value": "Drives Drive Items Drive Item Workbook Functions Dvar P",
					"action": "Invoke action dvarP",
					"description": "Invoke action dvarP",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.dvarP"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ecma Ceiling",
					"value": "Drives Drive Items Drive Item Workbook Functions Ecma Ceiling",
					"action": "Invoke action ecma_Ceiling",
					"description": "Invoke action ecma_Ceiling",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ecma_Ceiling"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Edate",
					"value": "Drives Drive Items Drive Item Workbook Functions Edate",
					"action": "Invoke action edate",
					"description": "Invoke action edate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.edate"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Effect",
					"value": "Drives Drive Items Drive Item Workbook Functions Effect",
					"action": "Invoke action effect",
					"description": "Invoke action effect",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.effect"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Eo Month",
					"value": "Drives Drive Items Drive Item Workbook Functions Eo Month",
					"action": "Invoke action eoMonth",
					"description": "Invoke action eoMonth",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.eoMonth"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Erf",
					"value": "Drives Drive Items Drive Item Workbook Functions Erf",
					"action": "Invoke action erf",
					"description": "Invoke action erf",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.erf"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Erf C",
					"value": "Drives Drive Items Drive Item Workbook Functions Erf C",
					"action": "Invoke action erfC",
					"description": "Invoke action erfC",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.erfC"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Erf C Precise",
					"value": "Drives Drive Items Drive Item Workbook Functions Erf C Precise",
					"action": "Invoke action erfC_Precise",
					"description": "Invoke action erfC_Precise",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.erfC_Precise"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Erf Precise",
					"value": "Drives Drive Items Drive Item Workbook Functions Erf Precise",
					"action": "Invoke action erf_Precise",
					"description": "Invoke action erf_Precise",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.erf_Precise"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Error Type",
					"value": "Drives Drive Items Drive Item Workbook Functions Error Type",
					"action": "Invoke action error_Type",
					"description": "Invoke action error_Type",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.error_Type"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Even",
					"value": "Drives Drive Items Drive Item Workbook Functions Even",
					"action": "Invoke action even",
					"description": "Invoke action even",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.even"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Exact",
					"value": "Drives Drive Items Drive Item Workbook Functions Exact",
					"action": "Invoke action exact",
					"description": "Invoke action exact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.exact"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Exp",
					"value": "Drives Drive Items Drive Item Workbook Functions Exp",
					"action": "Invoke action exp",
					"description": "Invoke action exp",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.exp"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Expon Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Expon Dist",
					"action": "Invoke action expon_Dist",
					"description": "Invoke action expon_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.expon_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions F Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions F Dist",
					"action": "Invoke action f_Dist",
					"description": "Invoke action f_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.f_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions F Dist RT",
					"value": "Drives Drive Items Drive Item Workbook Functions F Dist RT",
					"action": "Invoke action f_Dist_RT",
					"description": "Invoke action f_Dist_RT",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.f_Dist_RT"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions F Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions F Inv",
					"action": "Invoke action f_Inv",
					"description": "Invoke action f_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.f_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions F Inv RT",
					"value": "Drives Drive Items Drive Item Workbook Functions F Inv RT",
					"action": "Invoke action f_Inv_RT",
					"description": "Invoke action f_Inv_RT",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.f_Inv_RT"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fact",
					"value": "Drives Drive Items Drive Item Workbook Functions Fact",
					"action": "Invoke action fact",
					"description": "Invoke action fact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.fact"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fact Double",
					"value": "Drives Drive Items Drive Item Workbook Functions Fact Double",
					"action": "Invoke action factDouble",
					"description": "Invoke action factDouble",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.factDouble"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions False",
					"value": "Drives Drive Items Drive Item Workbook Functions False",
					"action": "Invoke action false",
					"description": "Invoke action false",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.false"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Find",
					"value": "Drives Drive Items Drive Item Workbook Functions Find",
					"action": "Invoke action find",
					"description": "Invoke action find",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.find"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Find B",
					"value": "Drives Drive Items Drive Item Workbook Functions Find B",
					"action": "Invoke action findB",
					"description": "Invoke action findB",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.findB"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fisher",
					"value": "Drives Drive Items Drive Item Workbook Functions Fisher",
					"action": "Invoke action fisher",
					"description": "Invoke action fisher",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.fisher"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fisher Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Fisher Inv",
					"action": "Invoke action fisherInv",
					"description": "Invoke action fisherInv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.fisherInv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fixed",
					"value": "Drives Drive Items Drive Item Workbook Functions Fixed",
					"action": "Invoke action fixed",
					"description": "Invoke action fixed",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.fixed"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Floor Math",
					"value": "Drives Drive Items Drive Item Workbook Functions Floor Math",
					"action": "Invoke action floor_Math",
					"description": "Invoke action floor_Math",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.floor_Math"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Floor Precise",
					"value": "Drives Drive Items Drive Item Workbook Functions Floor Precise",
					"action": "Invoke action floor_Precise",
					"description": "Invoke action floor_Precise",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.floor_Precise"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fv",
					"value": "Drives Drive Items Drive Item Workbook Functions Fv",
					"action": "Invoke action fv",
					"description": "Invoke action fv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.fv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Fvschedule",
					"value": "Drives Drive Items Drive Item Workbook Functions Fvschedule",
					"action": "Invoke action fvschedule",
					"description": "Invoke action fvschedule",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.fvschedule"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gamma",
					"value": "Drives Drive Items Drive Item Workbook Functions Gamma",
					"action": "Invoke action gamma",
					"description": "Invoke action gamma",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gamma"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gamma Ln",
					"value": "Drives Drive Items Drive Item Workbook Functions Gamma Ln",
					"action": "Invoke action gammaLn",
					"description": "Invoke action gammaLn",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gammaLn"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gamma Ln Precise",
					"value": "Drives Drive Items Drive Item Workbook Functions Gamma Ln Precise",
					"action": "Invoke action gammaLn_Precise",
					"description": "Invoke action gammaLn_Precise",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gammaLn_Precise"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gamma Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Gamma Dist",
					"action": "Invoke action gamma_Dist",
					"description": "Invoke action gamma_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gamma_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gamma Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Gamma Inv",
					"action": "Invoke action gamma_Inv",
					"description": "Invoke action gamma_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gamma_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gauss",
					"value": "Drives Drive Items Drive Item Workbook Functions Gauss",
					"action": "Invoke action gauss",
					"description": "Invoke action gauss",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gauss"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Gcd",
					"value": "Drives Drive Items Drive Item Workbook Functions Gcd",
					"action": "Invoke action gcd",
					"description": "Invoke action gcd",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.gcd"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ge Step",
					"value": "Drives Drive Items Drive Item Workbook Functions Ge Step",
					"action": "Invoke action geStep",
					"description": "Invoke action geStep",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.geStep"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Geo Mean",
					"value": "Drives Drive Items Drive Item Workbook Functions Geo Mean",
					"action": "Invoke action geoMean",
					"description": "Invoke action geoMean",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.geoMean"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Har Mean",
					"value": "Drives Drive Items Drive Item Workbook Functions Har Mean",
					"action": "Invoke action harMean",
					"description": "Invoke action harMean",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.harMean"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hex 2 Bin",
					"value": "Drives Drive Items Drive Item Workbook Functions Hex 2 Bin",
					"action": "Invoke action hex2Bin",
					"description": "Invoke action hex2Bin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hex2Bin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hex 2 Dec",
					"value": "Drives Drive Items Drive Item Workbook Functions Hex 2 Dec",
					"action": "Invoke action hex2Dec",
					"description": "Invoke action hex2Dec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hex2Dec"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hex 2 Oct",
					"value": "Drives Drive Items Drive Item Workbook Functions Hex 2 Oct",
					"action": "Invoke action hex2Oct",
					"description": "Invoke action hex2Oct",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hex2Oct"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hlookup",
					"value": "Drives Drive Items Drive Item Workbook Functions Hlookup",
					"action": "Invoke action hlookup",
					"description": "Invoke action hlookup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hlookup"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hour",
					"value": "Drives Drive Items Drive Item Workbook Functions Hour",
					"action": "Invoke action hour",
					"description": "Invoke action hour",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hour"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist",
					"action": "Invoke action hypGeom_Dist",
					"description": "Invoke action hypGeom_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hypGeom_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Hyperlink",
					"value": "Drives Drive Items Drive Item Workbook Functions Hyperlink",
					"action": "Invoke action hyperlink",
					"description": "Invoke action hyperlink",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.hyperlink"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions If",
					"value": "Drives Drive Items Drive Item Workbook Functions If",
					"action": "Invoke action if",
					"description": "Invoke action if",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.if"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Abs",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Abs",
					"action": "Invoke action imAbs",
					"description": "Invoke action imAbs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imAbs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Argument",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Argument",
					"action": "Invoke action imArgument",
					"description": "Invoke action imArgument",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imArgument"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Conjugate",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Conjugate",
					"action": "Invoke action imConjugate",
					"description": "Invoke action imConjugate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imConjugate"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Cos",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Cos",
					"action": "Invoke action imCos",
					"description": "Invoke action imCos",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imCos"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Cosh",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Cosh",
					"action": "Invoke action imCosh",
					"description": "Invoke action imCosh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imCosh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Cot",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Cot",
					"action": "Invoke action imCot",
					"description": "Invoke action imCot",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imCot"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Csc",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Csc",
					"action": "Invoke action imCsc",
					"description": "Invoke action imCsc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imCsc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Csch",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Csch",
					"action": "Invoke action imCsch",
					"description": "Invoke action imCsch",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imCsch"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Div",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Div",
					"action": "Invoke action imDiv",
					"description": "Invoke action imDiv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imDiv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Exp",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Exp",
					"action": "Invoke action imExp",
					"description": "Invoke action imExp",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imExp"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Ln",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Ln",
					"action": "Invoke action imLn",
					"description": "Invoke action imLn",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imLn"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Log 10",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Log 10",
					"action": "Invoke action imLog10",
					"description": "Invoke action imLog10",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imLog10"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Log 2",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Log 2",
					"action": "Invoke action imLog2",
					"description": "Invoke action imLog2",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imLog2"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Power",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Power",
					"action": "Invoke action imPower",
					"description": "Invoke action imPower",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imPower"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Product",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Product",
					"action": "Invoke action imProduct",
					"description": "Invoke action imProduct",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imProduct"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Real",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Real",
					"action": "Invoke action imReal",
					"description": "Invoke action imReal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imReal"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sec",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sec",
					"action": "Invoke action imSec",
					"description": "Invoke action imSec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSec"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sech",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sech",
					"action": "Invoke action imSech",
					"description": "Invoke action imSech",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSech"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sin",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sin",
					"action": "Invoke action imSin",
					"description": "Invoke action imSin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sinh",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sinh",
					"action": "Invoke action imSinh",
					"description": "Invoke action imSinh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSinh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sqrt",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sqrt",
					"action": "Invoke action imSqrt",
					"description": "Invoke action imSqrt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSqrt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sub",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sub",
					"action": "Invoke action imSub",
					"description": "Invoke action imSub",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSub"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Sum",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Sum",
					"action": "Invoke action imSum",
					"description": "Invoke action imSum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imSum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Im Tan",
					"value": "Drives Drive Items Drive Item Workbook Functions Im Tan",
					"action": "Invoke action imTan",
					"description": "Invoke action imTan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imTan"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Imaginary",
					"value": "Drives Drive Items Drive Item Workbook Functions Imaginary",
					"action": "Invoke action imaginary",
					"description": "Invoke action imaginary",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.imaginary"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Int",
					"value": "Drives Drive Items Drive Item Workbook Functions Int",
					"action": "Invoke action int",
					"description": "Invoke action int",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.int"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Int Rate",
					"value": "Drives Drive Items Drive Item Workbook Functions Int Rate",
					"action": "Invoke action intRate",
					"description": "Invoke action intRate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.intRate"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ipmt",
					"value": "Drives Drive Items Drive Item Workbook Functions Ipmt",
					"action": "Invoke action ipmt",
					"description": "Invoke action ipmt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ipmt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Irr",
					"value": "Drives Drive Items Drive Item Workbook Functions Irr",
					"action": "Invoke action irr",
					"description": "Invoke action irr",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.irr"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Err",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Err",
					"action": "Invoke action isErr",
					"description": "Invoke action isErr",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isErr"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Error",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Error",
					"action": "Invoke action isError",
					"description": "Invoke action isError",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isError"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Even",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Even",
					"action": "Invoke action isEven",
					"description": "Invoke action isEven",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isEven"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Formula",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Formula",
					"action": "Invoke action isFormula",
					"description": "Invoke action isFormula",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isFormula"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Logical",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Logical",
					"action": "Invoke action isLogical",
					"description": "Invoke action isLogical",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isLogical"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is NA",
					"value": "Drives Drive Items Drive Item Workbook Functions Is NA",
					"action": "Invoke action isNA",
					"description": "Invoke action isNA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isNA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Non Text",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Non Text",
					"action": "Invoke action isNonText",
					"description": "Invoke action isNonText",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isNonText"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Number",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Number",
					"action": "Invoke action isNumber",
					"description": "Invoke action isNumber",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isNumber"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Odd",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Odd",
					"action": "Invoke action isOdd",
					"description": "Invoke action isOdd",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isOdd"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Is Text",
					"value": "Drives Drive Items Drive Item Workbook Functions Is Text",
					"action": "Invoke action isText",
					"description": "Invoke action isText",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isText"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Iso Week Num",
					"value": "Drives Drive Items Drive Item Workbook Functions Iso Week Num",
					"action": "Invoke action isoWeekNum",
					"description": "Invoke action isoWeekNum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isoWeekNum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Iso Ceiling",
					"value": "Drives Drive Items Drive Item Workbook Functions Iso Ceiling",
					"action": "Invoke action iso_Ceiling",
					"description": "Invoke action iso_Ceiling",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.iso_Ceiling"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ispmt",
					"value": "Drives Drive Items Drive Item Workbook Functions Ispmt",
					"action": "Invoke action ispmt",
					"description": "Invoke action ispmt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ispmt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Isref",
					"value": "Drives Drive Items Drive Item Workbook Functions Isref",
					"action": "Invoke action isref",
					"description": "Invoke action isref",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.isref"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Kurt",
					"value": "Drives Drive Items Drive Item Workbook Functions Kurt",
					"action": "Invoke action kurt",
					"description": "Invoke action kurt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.kurt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Large",
					"value": "Drives Drive Items Drive Item Workbook Functions Large",
					"action": "Invoke action large",
					"description": "Invoke action large",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.large"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Lcm",
					"value": "Drives Drive Items Drive Item Workbook Functions Lcm",
					"action": "Invoke action lcm",
					"description": "Invoke action lcm",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.lcm"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Left",
					"value": "Drives Drive Items Drive Item Workbook Functions Left",
					"action": "Invoke action left",
					"description": "Invoke action left",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.left"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Leftb",
					"value": "Drives Drive Items Drive Item Workbook Functions Leftb",
					"action": "Invoke action leftb",
					"description": "Invoke action leftb",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.leftb"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Len",
					"value": "Drives Drive Items Drive Item Workbook Functions Len",
					"action": "Invoke action len",
					"description": "Invoke action len",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.len"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Lenb",
					"value": "Drives Drive Items Drive Item Workbook Functions Lenb",
					"action": "Invoke action lenb",
					"description": "Invoke action lenb",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.lenb"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ln",
					"value": "Drives Drive Items Drive Item Workbook Functions Ln",
					"action": "Invoke action ln",
					"description": "Invoke action ln",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ln"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Log",
					"value": "Drives Drive Items Drive Item Workbook Functions Log",
					"action": "Invoke action log",
					"description": "Invoke action log",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.log"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Log 10",
					"value": "Drives Drive Items Drive Item Workbook Functions Log 10",
					"action": "Invoke action log10",
					"description": "Invoke action log10",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.log10"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Log Norm Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Log Norm Dist",
					"action": "Invoke action logNorm_Dist",
					"description": "Invoke action logNorm_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.logNorm_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Log Norm Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Log Norm Inv",
					"action": "Invoke action logNorm_Inv",
					"description": "Invoke action logNorm_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.logNorm_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Lookup",
					"value": "Drives Drive Items Drive Item Workbook Functions Lookup",
					"action": "Invoke action lookup",
					"description": "Invoke action lookup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.lookup"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Lower",
					"value": "Drives Drive Items Drive Item Workbook Functions Lower",
					"action": "Invoke action lower",
					"description": "Invoke action lower",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.lower"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Match",
					"value": "Drives Drive Items Drive Item Workbook Functions Match",
					"action": "Invoke action match",
					"description": "Invoke action match",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.match"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Max",
					"value": "Drives Drive Items Drive Item Workbook Functions Max",
					"action": "Invoke action max",
					"description": "Invoke action max",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.max"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Max A",
					"value": "Drives Drive Items Drive Item Workbook Functions Max A",
					"action": "Invoke action maxA",
					"description": "Invoke action maxA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.maxA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Mduration",
					"value": "Drives Drive Items Drive Item Workbook Functions Mduration",
					"action": "Invoke action mduration",
					"description": "Invoke action mduration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.mduration"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Median",
					"value": "Drives Drive Items Drive Item Workbook Functions Median",
					"action": "Invoke action median",
					"description": "Invoke action median",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.median"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Mid",
					"value": "Drives Drive Items Drive Item Workbook Functions Mid",
					"action": "Invoke action mid",
					"description": "Invoke action mid",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.mid"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Midb",
					"value": "Drives Drive Items Drive Item Workbook Functions Midb",
					"action": "Invoke action midb",
					"description": "Invoke action midb",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.midb"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Min",
					"value": "Drives Drive Items Drive Item Workbook Functions Min",
					"action": "Invoke action min",
					"description": "Invoke action min",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.min"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Min A",
					"value": "Drives Drive Items Drive Item Workbook Functions Min A",
					"action": "Invoke action minA",
					"description": "Invoke action minA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.minA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Minute",
					"value": "Drives Drive Items Drive Item Workbook Functions Minute",
					"action": "Invoke action minute",
					"description": "Invoke action minute",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.minute"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Mirr",
					"value": "Drives Drive Items Drive Item Workbook Functions Mirr",
					"action": "Invoke action mirr",
					"description": "Invoke action mirr",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.mirr"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Mod",
					"value": "Drives Drive Items Drive Item Workbook Functions Mod",
					"action": "Invoke action mod",
					"description": "Invoke action mod",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.mod"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Month",
					"value": "Drives Drive Items Drive Item Workbook Functions Month",
					"action": "Invoke action month",
					"description": "Invoke action month",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.month"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Mround",
					"value": "Drives Drive Items Drive Item Workbook Functions Mround",
					"action": "Invoke action mround",
					"description": "Invoke action mround",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.mround"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Multi Nomial",
					"value": "Drives Drive Items Drive Item Workbook Functions Multi Nomial",
					"action": "Invoke action multiNomial",
					"description": "Invoke action multiNomial",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.multiNomial"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions N",
					"value": "Drives Drive Items Drive Item Workbook Functions N",
					"action": "Invoke action n",
					"description": "Invoke action n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.n"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Na",
					"value": "Drives Drive Items Drive Item Workbook Functions Na",
					"action": "Invoke action na",
					"description": "Invoke action na",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.na"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Neg Binom Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Neg Binom Dist",
					"action": "Invoke action negBinom_Dist",
					"description": "Invoke action negBinom_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.negBinom_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Network Days",
					"value": "Drives Drive Items Drive Item Workbook Functions Network Days",
					"action": "Invoke action networkDays",
					"description": "Invoke action networkDays",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.networkDays"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Network Days Intl",
					"value": "Drives Drive Items Drive Item Workbook Functions Network Days Intl",
					"action": "Invoke action networkDays_Intl",
					"description": "Invoke action networkDays_Intl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.networkDays_Intl"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Nominal",
					"value": "Drives Drive Items Drive Item Workbook Functions Nominal",
					"action": "Invoke action nominal",
					"description": "Invoke action nominal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.nominal"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Norm Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Norm Dist",
					"action": "Invoke action norm_Dist",
					"description": "Invoke action norm_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.norm_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Norm Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Norm Inv",
					"action": "Invoke action norm_Inv",
					"description": "Invoke action norm_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.norm_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Norm S Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Norm S Dist",
					"action": "Invoke action norm_S_Dist",
					"description": "Invoke action norm_S_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.norm_S_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Norm S Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions Norm S Inv",
					"action": "Invoke action norm_S_Inv",
					"description": "Invoke action norm_S_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.norm_S_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Not",
					"value": "Drives Drive Items Drive Item Workbook Functions Not",
					"action": "Invoke action not",
					"description": "Invoke action not",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.not"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Now",
					"value": "Drives Drive Items Drive Item Workbook Functions Now",
					"action": "Invoke action now",
					"description": "Invoke action now",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.now"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Nper",
					"value": "Drives Drive Items Drive Item Workbook Functions Nper",
					"action": "Invoke action nper",
					"description": "Invoke action nper",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.nper"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Npv",
					"value": "Drives Drive Items Drive Item Workbook Functions Npv",
					"action": "Invoke action npv",
					"description": "Invoke action npv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.npv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Number Value",
					"value": "Drives Drive Items Drive Item Workbook Functions Number Value",
					"action": "Invoke action numberValue",
					"description": "Invoke action numberValue",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.numberValue"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Oct 2 Bin",
					"value": "Drives Drive Items Drive Item Workbook Functions Oct 2 Bin",
					"action": "Invoke action oct2Bin",
					"description": "Invoke action oct2Bin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oct2Bin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Oct 2 Dec",
					"value": "Drives Drive Items Drive Item Workbook Functions Oct 2 Dec",
					"action": "Invoke action oct2Dec",
					"description": "Invoke action oct2Dec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oct2Dec"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Oct 2 Hex",
					"value": "Drives Drive Items Drive Item Workbook Functions Oct 2 Hex",
					"action": "Invoke action oct2Hex",
					"description": "Invoke action oct2Hex",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oct2Hex"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Odd",
					"value": "Drives Drive Items Drive Item Workbook Functions Odd",
					"action": "Invoke action odd",
					"description": "Invoke action odd",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.odd"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Odd F Price",
					"value": "Drives Drive Items Drive Item Workbook Functions Odd F Price",
					"action": "Invoke action oddFPrice",
					"description": "Invoke action oddFPrice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oddFPrice"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Odd F Yield",
					"value": "Drives Drive Items Drive Item Workbook Functions Odd F Yield",
					"action": "Invoke action oddFYield",
					"description": "Invoke action oddFYield",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oddFYield"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Odd L Price",
					"value": "Drives Drive Items Drive Item Workbook Functions Odd L Price",
					"action": "Invoke action oddLPrice",
					"description": "Invoke action oddLPrice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oddLPrice"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Odd L Yield",
					"value": "Drives Drive Items Drive Item Workbook Functions Odd L Yield",
					"action": "Invoke action oddLYield",
					"description": "Invoke action oddLYield",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.oddLYield"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Or",
					"value": "Drives Drive Items Drive Item Workbook Functions Or",
					"action": "Invoke action or",
					"description": "Invoke action or",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.or"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Pduration",
					"value": "Drives Drive Items Drive Item Workbook Functions Pduration",
					"action": "Invoke action pduration",
					"description": "Invoke action pduration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.pduration"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Percent Rank Exc",
					"value": "Drives Drive Items Drive Item Workbook Functions Percent Rank Exc",
					"action": "Invoke action percentRank_Exc",
					"description": "Invoke action percentRank_Exc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.percentRank_Exc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Percent Rank Inc",
					"value": "Drives Drive Items Drive Item Workbook Functions Percent Rank Inc",
					"action": "Invoke action percentRank_Inc",
					"description": "Invoke action percentRank_Inc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.percentRank_Inc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Percentile Exc",
					"value": "Drives Drive Items Drive Item Workbook Functions Percentile Exc",
					"action": "Invoke action percentile_Exc",
					"description": "Invoke action percentile_Exc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.percentile_Exc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Percentile Inc",
					"value": "Drives Drive Items Drive Item Workbook Functions Percentile Inc",
					"action": "Invoke action percentile_Inc",
					"description": "Invoke action percentile_Inc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.percentile_Inc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Permut",
					"value": "Drives Drive Items Drive Item Workbook Functions Permut",
					"action": "Invoke action permut",
					"description": "Invoke action permut",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.permut"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Permutationa",
					"value": "Drives Drive Items Drive Item Workbook Functions Permutationa",
					"action": "Invoke action permutationa",
					"description": "Invoke action permutationa",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.permutationa"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Phi",
					"value": "Drives Drive Items Drive Item Workbook Functions Phi",
					"action": "Invoke action phi",
					"description": "Invoke action phi",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.phi"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Pi",
					"value": "Drives Drive Items Drive Item Workbook Functions Pi",
					"action": "Invoke action pi",
					"description": "Invoke action pi",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.pi"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Pmt",
					"value": "Drives Drive Items Drive Item Workbook Functions Pmt",
					"action": "Invoke action pmt",
					"description": "Invoke action pmt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.pmt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Poisson Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Poisson Dist",
					"action": "Invoke action poisson_Dist",
					"description": "Invoke action poisson_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.poisson_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Power",
					"value": "Drives Drive Items Drive Item Workbook Functions Power",
					"action": "Invoke action power",
					"description": "Invoke action power",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.power"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Ppmt",
					"value": "Drives Drive Items Drive Item Workbook Functions Ppmt",
					"action": "Invoke action ppmt",
					"description": "Invoke action ppmt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.ppmt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Price",
					"value": "Drives Drive Items Drive Item Workbook Functions Price",
					"action": "Invoke action price",
					"description": "Invoke action price",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.price"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Price Disc",
					"value": "Drives Drive Items Drive Item Workbook Functions Price Disc",
					"action": "Invoke action priceDisc",
					"description": "Invoke action priceDisc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.priceDisc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Price Mat",
					"value": "Drives Drive Items Drive Item Workbook Functions Price Mat",
					"action": "Invoke action priceMat",
					"description": "Invoke action priceMat",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.priceMat"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Product",
					"value": "Drives Drive Items Drive Item Workbook Functions Product",
					"action": "Invoke action product",
					"description": "Invoke action product",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.product"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Proper",
					"value": "Drives Drive Items Drive Item Workbook Functions Proper",
					"action": "Invoke action proper",
					"description": "Invoke action proper",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.proper"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Pv",
					"value": "Drives Drive Items Drive Item Workbook Functions Pv",
					"action": "Invoke action pv",
					"description": "Invoke action pv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.pv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Quartile Exc",
					"value": "Drives Drive Items Drive Item Workbook Functions Quartile Exc",
					"action": "Invoke action quartile_Exc",
					"description": "Invoke action quartile_Exc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.quartile_Exc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Quartile Inc",
					"value": "Drives Drive Items Drive Item Workbook Functions Quartile Inc",
					"action": "Invoke action quartile_Inc",
					"description": "Invoke action quartile_Inc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.quartile_Inc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Quotient",
					"value": "Drives Drive Items Drive Item Workbook Functions Quotient",
					"action": "Invoke action quotient",
					"description": "Invoke action quotient",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.quotient"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Radians",
					"value": "Drives Drive Items Drive Item Workbook Functions Radians",
					"action": "Invoke action radians",
					"description": "Invoke action radians",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.radians"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rand",
					"value": "Drives Drive Items Drive Item Workbook Functions Rand",
					"action": "Invoke action rand",
					"description": "Invoke action rand",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rand"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rand Between",
					"value": "Drives Drive Items Drive Item Workbook Functions Rand Between",
					"action": "Invoke action randBetween",
					"description": "Invoke action randBetween",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.randBetween"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rank Avg",
					"value": "Drives Drive Items Drive Item Workbook Functions Rank Avg",
					"action": "Invoke action rank_Avg",
					"description": "Invoke action rank_Avg",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rank_Avg"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rank Eq",
					"value": "Drives Drive Items Drive Item Workbook Functions Rank Eq",
					"action": "Invoke action rank_Eq",
					"description": "Invoke action rank_Eq",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rank_Eq"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rate",
					"value": "Drives Drive Items Drive Item Workbook Functions Rate",
					"action": "Invoke action rate",
					"description": "Invoke action rate",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rate"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Received",
					"value": "Drives Drive Items Drive Item Workbook Functions Received",
					"action": "Invoke action received",
					"description": "Invoke action received",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.received"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Replace",
					"value": "Drives Drive Items Drive Item Workbook Functions Replace",
					"action": "Invoke action replace",
					"description": "Invoke action replace",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.replace"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Replace B",
					"value": "Drives Drive Items Drive Item Workbook Functions Replace B",
					"action": "Invoke action replaceB",
					"description": "Invoke action replaceB",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.replaceB"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rept",
					"value": "Drives Drive Items Drive Item Workbook Functions Rept",
					"action": "Invoke action rept",
					"description": "Invoke action rept",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rept"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Right",
					"value": "Drives Drive Items Drive Item Workbook Functions Right",
					"action": "Invoke action right",
					"description": "Invoke action right",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.right"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rightb",
					"value": "Drives Drive Items Drive Item Workbook Functions Rightb",
					"action": "Invoke action rightb",
					"description": "Invoke action rightb",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rightb"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Roman",
					"value": "Drives Drive Items Drive Item Workbook Functions Roman",
					"action": "Invoke action roman",
					"description": "Invoke action roman",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.roman"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Round",
					"value": "Drives Drive Items Drive Item Workbook Functions Round",
					"action": "Invoke action round",
					"description": "Invoke action round",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.round"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Round Down",
					"value": "Drives Drive Items Drive Item Workbook Functions Round Down",
					"action": "Invoke action roundDown",
					"description": "Invoke action roundDown",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.roundDown"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Round Up",
					"value": "Drives Drive Items Drive Item Workbook Functions Round Up",
					"action": "Invoke action roundUp",
					"description": "Invoke action roundUp",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.roundUp"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rows",
					"value": "Drives Drive Items Drive Item Workbook Functions Rows",
					"action": "Invoke action rows",
					"description": "Invoke action rows",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rows"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Rri",
					"value": "Drives Drive Items Drive Item Workbook Functions Rri",
					"action": "Invoke action rri",
					"description": "Invoke action rri",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.rri"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sec",
					"value": "Drives Drive Items Drive Item Workbook Functions Sec",
					"action": "Invoke action sec",
					"description": "Invoke action sec",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sec"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sech",
					"value": "Drives Drive Items Drive Item Workbook Functions Sech",
					"action": "Invoke action sech",
					"description": "Invoke action sech",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sech"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Second",
					"value": "Drives Drive Items Drive Item Workbook Functions Second",
					"action": "Invoke action second",
					"description": "Invoke action second",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.second"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Series Sum",
					"value": "Drives Drive Items Drive Item Workbook Functions Series Sum",
					"action": "Invoke action seriesSum",
					"description": "Invoke action seriesSum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.seriesSum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sheet",
					"value": "Drives Drive Items Drive Item Workbook Functions Sheet",
					"action": "Invoke action sheet",
					"description": "Invoke action sheet",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sheet"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sheets",
					"value": "Drives Drive Items Drive Item Workbook Functions Sheets",
					"action": "Invoke action sheets",
					"description": "Invoke action sheets",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sheets"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sign",
					"value": "Drives Drive Items Drive Item Workbook Functions Sign",
					"action": "Invoke action sign",
					"description": "Invoke action sign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sign"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sin",
					"value": "Drives Drive Items Drive Item Workbook Functions Sin",
					"action": "Invoke action sin",
					"description": "Invoke action sin",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sin"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sinh",
					"value": "Drives Drive Items Drive Item Workbook Functions Sinh",
					"action": "Invoke action sinh",
					"description": "Invoke action sinh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sinh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Skew",
					"value": "Drives Drive Items Drive Item Workbook Functions Skew",
					"action": "Invoke action skew",
					"description": "Invoke action skew",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.skew"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Skew P",
					"value": "Drives Drive Items Drive Item Workbook Functions Skew P",
					"action": "Invoke action skew_p",
					"description": "Invoke action skew_p",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.skew_p"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sln",
					"value": "Drives Drive Items Drive Item Workbook Functions Sln",
					"action": "Invoke action sln",
					"description": "Invoke action sln",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sln"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Small",
					"value": "Drives Drive Items Drive Item Workbook Functions Small",
					"action": "Invoke action small",
					"description": "Invoke action small",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.small"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sqrt",
					"value": "Drives Drive Items Drive Item Workbook Functions Sqrt",
					"action": "Invoke action sqrt",
					"description": "Invoke action sqrt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sqrt"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sqrt Pi",
					"value": "Drives Drive Items Drive Item Workbook Functions Sqrt Pi",
					"action": "Invoke action sqrtPi",
					"description": "Invoke action sqrtPi",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sqrtPi"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions St Dev A",
					"value": "Drives Drive Items Drive Item Workbook Functions St Dev A",
					"action": "Invoke action stDevA",
					"description": "Invoke action stDevA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.stDevA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions St Dev PA",
					"value": "Drives Drive Items Drive Item Workbook Functions St Dev PA",
					"action": "Invoke action stDevPA",
					"description": "Invoke action stDevPA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.stDevPA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions St Dev P",
					"value": "Drives Drive Items Drive Item Workbook Functions St Dev P",
					"action": "Invoke action stDev_P",
					"description": "Invoke action stDev_P",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.stDev_P"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions St Dev S",
					"value": "Drives Drive Items Drive Item Workbook Functions St Dev S",
					"action": "Invoke action stDev_S",
					"description": "Invoke action stDev_S",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.stDev_S"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Standardize",
					"value": "Drives Drive Items Drive Item Workbook Functions Standardize",
					"action": "Invoke action standardize",
					"description": "Invoke action standardize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.standardize"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Substitute",
					"value": "Drives Drive Items Drive Item Workbook Functions Substitute",
					"action": "Invoke action substitute",
					"description": "Invoke action substitute",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.substitute"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Subtotal",
					"value": "Drives Drive Items Drive Item Workbook Functions Subtotal",
					"action": "Invoke action subtotal",
					"description": "Invoke action subtotal",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.subtotal"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sum",
					"value": "Drives Drive Items Drive Item Workbook Functions Sum",
					"action": "Invoke action sum",
					"description": "Invoke action sum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sum If",
					"value": "Drives Drive Items Drive Item Workbook Functions Sum If",
					"action": "Invoke action sumIf",
					"description": "Invoke action sumIf",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sumIf"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sum Ifs",
					"value": "Drives Drive Items Drive Item Workbook Functions Sum Ifs",
					"action": "Invoke action sumIfs",
					"description": "Invoke action sumIfs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sumIfs"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Sum Sq",
					"value": "Drives Drive Items Drive Item Workbook Functions Sum Sq",
					"action": "Invoke action sumSq",
					"description": "Invoke action sumSq",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.sumSq"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Syd",
					"value": "Drives Drive Items Drive Item Workbook Functions Syd",
					"action": "Invoke action syd",
					"description": "Invoke action syd",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.syd"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions T",
					"value": "Drives Drive Items Drive Item Workbook Functions T",
					"action": "Invoke action t",
					"description": "Invoke action t",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.t"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions T Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions T Dist",
					"action": "Invoke action t_Dist",
					"description": "Invoke action t_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.t_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions T Dist 2 T",
					"value": "Drives Drive Items Drive Item Workbook Functions T Dist 2 T",
					"action": "Invoke action t_Dist_2T",
					"description": "Invoke action t_Dist_2T",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.t_Dist_2T"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions T Dist RT",
					"value": "Drives Drive Items Drive Item Workbook Functions T Dist RT",
					"action": "Invoke action t_Dist_RT",
					"description": "Invoke action t_Dist_RT",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.t_Dist_RT"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions T Inv",
					"value": "Drives Drive Items Drive Item Workbook Functions T Inv",
					"action": "Invoke action t_Inv",
					"description": "Invoke action t_Inv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.t_Inv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions T Inv 2 T",
					"value": "Drives Drive Items Drive Item Workbook Functions T Inv 2 T",
					"action": "Invoke action t_Inv_2T",
					"description": "Invoke action t_Inv_2T",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.t_Inv_2T"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Tan",
					"value": "Drives Drive Items Drive Item Workbook Functions Tan",
					"action": "Invoke action tan",
					"description": "Invoke action tan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.tan"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Tanh",
					"value": "Drives Drive Items Drive Item Workbook Functions Tanh",
					"action": "Invoke action tanh",
					"description": "Invoke action tanh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.tanh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Tbill Eq",
					"value": "Drives Drive Items Drive Item Workbook Functions Tbill Eq",
					"action": "Invoke action tbillEq",
					"description": "Invoke action tbillEq",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.tbillEq"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Tbill Price",
					"value": "Drives Drive Items Drive Item Workbook Functions Tbill Price",
					"action": "Invoke action tbillPrice",
					"description": "Invoke action tbillPrice",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.tbillPrice"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Tbill Yield",
					"value": "Drives Drive Items Drive Item Workbook Functions Tbill Yield",
					"action": "Invoke action tbillYield",
					"description": "Invoke action tbillYield",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.tbillYield"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Text",
					"value": "Drives Drive Items Drive Item Workbook Functions Text",
					"action": "Invoke action text",
					"description": "Invoke action text",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.text"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Time",
					"value": "Drives Drive Items Drive Item Workbook Functions Time",
					"action": "Invoke action time",
					"description": "Invoke action time",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.time"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Timevalue",
					"value": "Drives Drive Items Drive Item Workbook Functions Timevalue",
					"action": "Invoke action timevalue",
					"description": "Invoke action timevalue",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.timevalue"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Today",
					"value": "Drives Drive Items Drive Item Workbook Functions Today",
					"action": "Invoke action today",
					"description": "Invoke action today",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.today"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Trim",
					"value": "Drives Drive Items Drive Item Workbook Functions Trim",
					"action": "Invoke action trim",
					"description": "Invoke action trim",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.trim"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Trim Mean",
					"value": "Drives Drive Items Drive Item Workbook Functions Trim Mean",
					"action": "Invoke action trimMean",
					"description": "Invoke action trimMean",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.trimMean"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions True",
					"value": "Drives Drive Items Drive Item Workbook Functions True",
					"action": "Invoke action true",
					"description": "Invoke action true",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.true"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Trunc",
					"value": "Drives Drive Items Drive Item Workbook Functions Trunc",
					"action": "Invoke action trunc",
					"description": "Invoke action trunc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.trunc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Type",
					"value": "Drives Drive Items Drive Item Workbook Functions Type",
					"action": "Invoke action type",
					"description": "Invoke action type",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.type"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Unichar",
					"value": "Drives Drive Items Drive Item Workbook Functions Unichar",
					"action": "Invoke action unichar",
					"description": "Invoke action unichar",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.unichar"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Unicode",
					"value": "Drives Drive Items Drive Item Workbook Functions Unicode",
					"action": "Invoke action unicode",
					"description": "Invoke action unicode",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.unicode"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Upper",
					"value": "Drives Drive Items Drive Item Workbook Functions Upper",
					"action": "Invoke action upper",
					"description": "Invoke action upper",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.upper"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Usdollar",
					"value": "Drives Drive Items Drive Item Workbook Functions Usdollar",
					"action": "Invoke action usdollar",
					"description": "Invoke action usdollar",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.usdollar"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Value",
					"value": "Drives Drive Items Drive Item Workbook Functions Value",
					"action": "Invoke action value",
					"description": "Invoke action value",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.value"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Var A",
					"value": "Drives Drive Items Drive Item Workbook Functions Var A",
					"action": "Invoke action varA",
					"description": "Invoke action varA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.varA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Var PA",
					"value": "Drives Drive Items Drive Item Workbook Functions Var PA",
					"action": "Invoke action varPA",
					"description": "Invoke action varPA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.varPA"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Var P",
					"value": "Drives Drive Items Drive Item Workbook Functions Var P",
					"action": "Invoke action var_P",
					"description": "Invoke action var_P",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.var_P"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Var S",
					"value": "Drives Drive Items Drive Item Workbook Functions Var S",
					"action": "Invoke action var_S",
					"description": "Invoke action var_S",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.var_S"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Vdb",
					"value": "Drives Drive Items Drive Item Workbook Functions Vdb",
					"action": "Invoke action vdb",
					"description": "Invoke action vdb",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.vdb"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Vlookup",
					"value": "Drives Drive Items Drive Item Workbook Functions Vlookup",
					"action": "Invoke action vlookup",
					"description": "Invoke action vlookup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.vlookup"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Week Num",
					"value": "Drives Drive Items Drive Item Workbook Functions Week Num",
					"action": "Invoke action weekNum",
					"description": "Invoke action weekNum",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.weekNum"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Weekday",
					"value": "Drives Drive Items Drive Item Workbook Functions Weekday",
					"action": "Invoke action weekday",
					"description": "Invoke action weekday",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.weekday"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Weibull Dist",
					"value": "Drives Drive Items Drive Item Workbook Functions Weibull Dist",
					"action": "Invoke action weibull_Dist",
					"description": "Invoke action weibull_Dist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.weibull_Dist"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Work Day",
					"value": "Drives Drive Items Drive Item Workbook Functions Work Day",
					"action": "Invoke action workDay",
					"description": "Invoke action workDay",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.workDay"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Work Day Intl",
					"value": "Drives Drive Items Drive Item Workbook Functions Work Day Intl",
					"action": "Invoke action workDay_Intl",
					"description": "Invoke action workDay_Intl",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.workDay_Intl"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Xirr",
					"value": "Drives Drive Items Drive Item Workbook Functions Xirr",
					"action": "Invoke action xirr",
					"description": "Invoke action xirr",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.xirr"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Xnpv",
					"value": "Drives Drive Items Drive Item Workbook Functions Xnpv",
					"action": "Invoke action xnpv",
					"description": "Invoke action xnpv",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.xnpv"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Xor",
					"value": "Drives Drive Items Drive Item Workbook Functions Xor",
					"action": "Invoke action xor",
					"description": "Invoke action xor",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.xor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Year",
					"value": "Drives Drive Items Drive Item Workbook Functions Year",
					"action": "Invoke action year",
					"description": "Invoke action year",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.year"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Year Frac",
					"value": "Drives Drive Items Drive Item Workbook Functions Year Frac",
					"action": "Invoke action yearFrac",
					"description": "Invoke action yearFrac",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.yearFrac"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Yield",
					"value": "Drives Drive Items Drive Item Workbook Functions Yield",
					"action": "Invoke action yield",
					"description": "Invoke action yield",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.yield"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Yield Disc",
					"value": "Drives Drive Items Drive Item Workbook Functions Yield Disc",
					"action": "Invoke action yieldDisc",
					"description": "Invoke action yieldDisc",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.yieldDisc"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Yield Mat",
					"value": "Drives Drive Items Drive Item Workbook Functions Yield Mat",
					"action": "Invoke action yieldMat",
					"description": "Invoke action yieldMat",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.yieldMat"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Functions Z Test",
					"value": "Drives Drive Items Drive Item Workbook Functions Z Test",
					"action": "Invoke action z_Test",
					"description": "Invoke action z_Test",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/functions/microsoft.graph.z_Test"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Close Session",
					"value": "Drives Drive Items Drive Item Workbook Close Session",
					"action": "Invoke action closeSession",
					"description": "Use this API to close an existing workbook session. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/microsoft.graph.closeSession"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Create Session",
					"value": "Drives Drive Items Drive Item Workbook Create Session",
					"action": "Invoke action createSession",
					"description": "Create a new workbook session.  Excel APIs can be called in one of two modes:  To represent the session in the API, use the `workbook-session-id: {session-id}` header.  In some cases, creating a new session requires an indeterminate time to complete. Microsoft Graph also provides a long running operations pattern. This pattern provides a way to poll for creation status updates, without waiting for the creation to complete. The following are the steps:",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/microsoft.graph.createSession"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Refresh Session",
					"value": "Drives Drive Items Drive Item Workbook Refresh Session",
					"action": "Invoke action refreshSession",
					"description": "Use this API to refresh an existing workbook session. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/microsoft.graph.refreshSession"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Names Add",
					"value": "Drives Drive Items Drive Item Workbook Names Add",
					"action": "Invoke action add",
					"description": "Adds a new name to the collection of the given scope using the user's locale for the formula.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Names Add Formula Local",
					"value": "Drives Drive Items Drive Item Workbook Names Add Formula Local",
					"action": "Invoke action addFormulaLocal",
					"description": "Adds a new name to the collection of the given scope using the user's locale for the formula.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/names/microsoft.graph.addFormulaLocal"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Add",
					"value": "Drives Drive Items Drive Item Workbook Tables Add",
					"action": "Invoke action add",
					"description": "Use this API to create a new Table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Add",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Add",
					"action": "Invoke action add",
					"description": "Adds a new column to the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply",
					"action": "Invoke action apply",
					"description": "Apply the given filter criteria on the given column.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.apply"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter",
					"action": "Invoke action applyBottomItemsFilter",
					"description": "Invoke action applyBottomItemsFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyBottomItemsFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter",
					"action": "Invoke action applyBottomPercentFilter",
					"description": "Invoke action applyBottomPercentFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyBottomPercentFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter",
					"action": "Invoke action applyCellColorFilter",
					"description": "Invoke action applyCellColorFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyCellColorFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter",
					"action": "Invoke action applyCustomFilter",
					"description": "Invoke action applyCustomFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyCustomFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter",
					"action": "Invoke action applyDynamicFilter",
					"description": "Invoke action applyDynamicFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyDynamicFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter",
					"action": "Invoke action applyFontColorFilter",
					"description": "Invoke action applyFontColorFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyFontColorFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter",
					"action": "Invoke action applyIconFilter",
					"description": "Invoke action applyIconFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyIconFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter",
					"action": "Invoke action applyTopItemsFilter",
					"description": "Invoke action applyTopItemsFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyTopItemsFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter",
					"action": "Invoke action applyTopPercentFilter",
					"description": "Invoke action applyTopPercentFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyTopPercentFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter",
					"action": "Invoke action applyValuesFilter",
					"description": "Invoke action applyValuesFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyValuesFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Clear",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Clear",
					"action": "Invoke action clear",
					"description": "Clear the filter on the given column.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Clear Filters",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Clear Filters",
					"action": "Invoke action clearFilters",
					"description": "Clears all the filters currently applied on the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.clearFilters"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Convert To Range",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Convert To Range",
					"action": "Invoke action convertToRange",
					"description": "Converts the table into a normal range of cells. All data is preserved.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.convertToRange"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Reapply Filters",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Reapply Filters",
					"action": "Invoke action reapplyFilters",
					"description": "Reapplies all the filters currently on the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.reapplyFilters"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Add",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Add",
					"action": "Invoke action add",
					"description": "Adds rows to the end of the table. Note that the API can accept multiple rows data using this API. Adding one row at a time could lead to performance degradation. The recommended approach would be to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform single rows add operation. Experiment with the number of rows to determine the ideal number of rows to use in single API call. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/rows/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Apply",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Apply",
					"action": "Invoke action apply",
					"description": "Perform a sort operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/sort/microsoft.graph.apply"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Clear",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Clear",
					"action": "Invoke action clear",
					"description": "Clears the sorting that is currently on the table. While this doesn't modify the table's ordering, it clears the state of the header buttons.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/sort/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Reapply",
					"value": "Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Reapply",
					"action": "Invoke action reapply",
					"description": "Reapplies the current sorting parameters to the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/tables/{{$parameter[\"workbookTable-id\"]}}/sort/microsoft.graph.reapply"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Add",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Add",
					"action": "Invoke action add",
					"description": "Adds a new worksheet to the workbook. The worksheet will be added at the end of existing worksheets. If you wish to activate the newly added worksheet, call '.activate() on it.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Add",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Add",
					"action": "Invoke action add",
					"description": "Creates a new chart.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Major Gridlines Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Major Gridlines Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/majorGridlines/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Minor Gridlines Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Minor Gridlines Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/categoryAxis/minorGridlines/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Major Gridlines Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Major Gridlines Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/majorGridlines/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Minor Gridlines Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Minor Gridlines Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/seriesAxis/minorGridlines/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Major Gridlines Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Major Gridlines Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/majorGridlines/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Minor Gridlines Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Minor Gridlines Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/axes/valueAxis/minorGridlines/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Clear",
					"action": "Invoke action clear",
					"description": "Clear the fill color of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/fill/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Set Solid Color",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Set Solid Color",
					"action": "Invoke action setSolidColor",
					"description": "Sets the fill formatting of a chart element to a uniform color.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/dataLabels/format/fill/microsoft.graph.setSolidColor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Clear",
					"action": "Invoke action clear",
					"description": "Clear the fill color of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/fill/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Set Solid Color",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Set Solid Color",
					"action": "Invoke action setSolidColor",
					"description": "Sets the fill formatting of a chart element to a uniform color.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/format/fill/microsoft.graph.setSolidColor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Clear",
					"action": "Invoke action clear",
					"description": "Clear the fill color of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/fill/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Set Solid Color",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Set Solid Color",
					"action": "Invoke action setSolidColor",
					"description": "Sets the fill formatting of a chart element to a uniform color.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/legend/format/fill/microsoft.graph.setSolidColor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Data",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Data",
					"action": "Invoke action setData",
					"description": "Resets the source data for the chart.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/microsoft.graph.setData"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Position",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Position",
					"action": "Invoke action setPosition",
					"description": "Positions the chart relative to cells on the worksheet.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/microsoft.graph.setPosition"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Clear",
					"action": "Invoke action clear",
					"description": "Clear the fill color of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/fill/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Set Solid Color",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Set Solid Color",
					"action": "Invoke action setSolidColor",
					"description": "Sets the fill formatting of a chart element to a uniform color.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/fill/microsoft.graph.setSolidColor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Line Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Line Clear",
					"action": "Invoke action clear",
					"description": "Clear the line format of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/format/line/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Clear",
					"action": "Invoke action clear",
					"description": "Clear the fill color of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format/fill/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Set Solid Color",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Set Solid Color",
					"action": "Invoke action setSolidColor",
					"description": "Sets the fill formatting of a chart element to a uniform color.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/series/{{$parameter[\"workbookChartSeries-id\"]}}/points/{{$parameter[\"workbookChartPoint-id\"]}}/format/fill/microsoft.graph.setSolidColor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Clear",
					"action": "Invoke action clear",
					"description": "Clear the fill color of a chart element.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/fill/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Set Solid Color",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Set Solid Color",
					"action": "Invoke action setSolidColor",
					"description": "Sets the fill formatting of a chart element to a uniform color.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/charts/{{$parameter[\"workbookChart-id\"]}}/title/format/fill/microsoft.graph.setSolidColor"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add",
					"action": "Invoke action add",
					"description": "Adds a new name to the collection of the given scope using the user's locale for the formula.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add Formula Local",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add Formula Local",
					"action": "Invoke action addFormulaLocal",
					"description": "Adds a new name to the collection of the given scope using the user's locale for the formula.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/names/microsoft.graph.addFormulaLocal"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Pivot Tables Refresh All",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Pivot Tables Refresh All",
					"action": "Invoke action refreshAll",
					"description": "Invoke action refreshAll",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables/microsoft.graph.refreshAll"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Pivot Tables Workbook Pivot Table Refresh",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Pivot Tables Workbook Pivot Table Refresh",
					"action": "Invoke action refresh",
					"description": "Invoke action refresh",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/pivotTables/{{$parameter[\"workbookPivotTable-id\"]}}/microsoft.graph.refresh"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Protect",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Protect",
					"action": "Invoke action protect",
					"description": "Protect a worksheet. It throws if the worksheet has been protected.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/protection/microsoft.graph.protect"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Unprotect",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Unprotect",
					"action": "Invoke action unprotect",
					"description": "Unprotect a worksheet",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/protection/microsoft.graph.unprotect"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Add",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Add",
					"action": "Invoke action add",
					"description": "Use this API to create a new Table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Add",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Add",
					"action": "Invoke action add",
					"description": "Adds a new column to the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply",
					"action": "Invoke action apply",
					"description": "Apply the given filter criteria on the given column.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.apply"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter",
					"action": "Invoke action applyBottomItemsFilter",
					"description": "Invoke action applyBottomItemsFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyBottomItemsFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter",
					"action": "Invoke action applyBottomPercentFilter",
					"description": "Invoke action applyBottomPercentFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyBottomPercentFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter",
					"action": "Invoke action applyCellColorFilter",
					"description": "Invoke action applyCellColorFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyCellColorFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter",
					"action": "Invoke action applyCustomFilter",
					"description": "Invoke action applyCustomFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyCustomFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter",
					"action": "Invoke action applyDynamicFilter",
					"description": "Invoke action applyDynamicFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyDynamicFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter",
					"action": "Invoke action applyFontColorFilter",
					"description": "Invoke action applyFontColorFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyFontColorFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter",
					"action": "Invoke action applyIconFilter",
					"description": "Invoke action applyIconFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyIconFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter",
					"action": "Invoke action applyTopItemsFilter",
					"description": "Invoke action applyTopItemsFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyTopItemsFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter",
					"action": "Invoke action applyTopPercentFilter",
					"description": "Invoke action applyTopPercentFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyTopPercentFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter",
					"action": "Invoke action applyValuesFilter",
					"description": "Invoke action applyValuesFilter",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.applyValuesFilter"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Clear",
					"action": "Invoke action clear",
					"description": "Clear the filter on the given column.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/columns/{{$parameter[\"workbookTableColumn-id\"]}}/filter/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Clear Filters",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Clear Filters",
					"action": "Invoke action clearFilters",
					"description": "Clears all the filters currently applied on the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.clearFilters"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Convert To Range",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Convert To Range",
					"action": "Invoke action convertToRange",
					"description": "Converts the table into a normal range of cells. All data is preserved.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.convertToRange"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Reapply Filters",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Reapply Filters",
					"action": "Invoke action reapplyFilters",
					"description": "Reapplies all the filters currently on the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/microsoft.graph.reapplyFilters"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Add",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Add",
					"action": "Invoke action add",
					"description": "Adds rows to the end of the table. Note that the API can accept multiple rows data using this API. Adding one row at a time could lead to performance degradation. The recommended approach would be to batch the rows together in a single call rather than doing single row insertion. For best results, collect the rows to be inserted on the application side and perform single rows add operation. Experiment with the number of rows to determine the ideal number of rows to use in single API call. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/rows/microsoft.graph.add"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Apply",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Apply",
					"action": "Invoke action apply",
					"description": "Perform a sort operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/sort/microsoft.graph.apply"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Clear",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Clear",
					"action": "Invoke action clear",
					"description": "Clears the sorting that is currently on the table. While this doesn't modify the table's ordering, it clears the state of the header buttons.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/sort/microsoft.graph.clear"
						}
					}
				},
				{
					"name": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Reapply",
					"value": "Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Reapply",
					"action": "Invoke action reapply",
					"description": "Reapplies the current sorting parameters to the table.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/workbook/worksheets/{{$parameter[\"workbookWorksheet-id\"]}}/tables/{{$parameter[\"workbookTable-id\"]}}/sort/microsoft.graph.reapply"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Add Copy",
					"value": "Drives Drive List Content Types Add Copy",
					"action": "Invoke action addCopy",
					"description": "Add a copy of a [content type][contentType] from a [site][site] to a [list][list].",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/microsoft.graph.addCopy"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Add Copy From Content Type Hub",
					"value": "Drives Drive List Content Types Add Copy From Content Type Hub",
					"action": "Invoke action addCopyFromContentTypeHub",
					"description": "Add or sync a copy of a published content type from the content type hub to a target site or a list. This method is part of the content type publishing changes to optimize the syncing of published content types to sites and lists, effectively switching from a 'push everywhere' to 'pull as needed' approach. The method allows users to pull content types directly from the content type hub to a site or list. For more information, see getCompatibleHubContentTypes and the blog post Syntex Product Updates – August 2021.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/microsoft.graph.addCopyFromContentTypeHub"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Content Type Associate With Hub Sites",
					"value": "Drives Drive List Content Types Content Type Associate With Hub Sites",
					"action": "Invoke action associateWithHubSites",
					"description": "Associate a [content type][contentType] with a list of hub sites.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.associateWithHubSites"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Content Type Copy To Default Content Location",
					"value": "Drives Drive List Content Types Content Type Copy To Default Content Location",
					"action": "Invoke action copyToDefaultContentLocation",
					"description": "Copy a file to a default content location in a [content type][contentType]. The file can then be added as a default file or template via a POST operation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.copyToDefaultContentLocation"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Content Type Publish",
					"value": "Drives Drive List Content Types Content Type Publish",
					"action": "Invoke action publish",
					"description": "Publishes a [contentType][] present in a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.publish"
						}
					}
				},
				{
					"name": "Drives Drive List Content Types Content Type Unpublish",
					"value": "Drives Drive List Content Types Content Type Unpublish",
					"action": "Invoke action unpublish",
					"description": "Unpublish a [contentType][] from a content type hub site.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.unpublish"
						}
					}
				},
				{
					"name": "Drives Drive List Items List Item Document Set Versions Document Set Version Restore",
					"value": "Drives Drive List Items List Item Document Set Versions Document Set Version Restore",
					"action": "Invoke action restore",
					"description": "Restore a document set version.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/documentSetVersions/{{$parameter[\"documentSetVersion-id\"]}}/microsoft.graph.restore"
						}
					}
				},
				{
					"name": "Drives Drive List Items List Item Create Link",
					"value": "Drives Drive List Items List Item Create Link",
					"action": "Invoke action createLink",
					"description": "Create a sharing link for a listItem. The **createLink** action creates a new sharing link if the specified link type doesn't already exist for the calling application.\nIf a sharing link of the specified type already exists for the app, this action will return the existing sharing link. **listItem** resources inherit sharing permissions from the list the item resides in.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.createLink"
						}
					}
				},
				{
					"name": "Drives Drive List Items List Item Versions List Item Version Restore Version",
					"value": "Drives Drive List Items List Item Versions List Item Version Restore Version",
					"action": "Invoke action restoreVersion",
					"description": "Invoke action restoreVersion",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/versions/{{$parameter[\"listItemVersion-id\"]}}/microsoft.graph.restoreVersion"
						}
					}
				},
				{
					"name": "Drives Drive List Subscriptions Subscription Reauthorize",
					"value": "Drives Drive List Subscriptions Subscription Reauthorize",
					"action": "Invoke action reauthorize",
					"description": "Invoke action reauthorize",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/drives/{{$parameter[\"drive-id\"]}}/list/subscriptions/{{$parameter[\"subscription-id\"]}}/microsoft.graph.reauthorize"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.assignSensitivityLabel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Assign Sensitivity Label"
					]
				}
			}
		},
		{
			"displayName": "Assignment Method",
			"name": "assignmentMethod",
			"type": "options",
			"default": "standard",
			"options": [
				{
					"name": "Standard",
					"value": "standard"
				},
				{
					"name": "Privileged",
					"value": "privileged"
				},
				{
					"name": "Auto",
					"value": "auto"
				},
				{
					"name": "Unknown Future Value",
					"value": "unknownFutureValue"
				}
			],
			"routing": {
				"send": {
					"property": "assignmentMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Assign Sensitivity Label"
					]
				}
			}
		},
		{
			"displayName": "Justification Text",
			"name": "justificationText",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "justificationText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Assign Sensitivity Label"
					]
				}
			}
		},
		{
			"displayName": "Sensitivity Label ID",
			"name": "sensitivityLabelId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "sensitivityLabelId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Assign Sensitivity Label"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.checkin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Checkin"
					]
				}
			}
		},
		{
			"displayName": "Check In As",
			"name": "checkInAs",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "checkInAs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Checkin"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Checkin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.checkout",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Checkout"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.copy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Copy"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Copy"
					]
				}
			}
		},
		{
			"displayName": "Parent Reference",
			"name": "parentReference",
			"type": "json",
			"default": "{\n  \"sharepointIds\": {}\n}",
			"routing": {
				"send": {
					"property": "parentReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.createLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date Time",
			"name": "expirationDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Retain Inherited Permissions",
			"name": "retainInheritedPermissions",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "retainInheritedPermissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.createUploadSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "Item",
			"name": "item",
			"type": "json",
			"default": "{\n  \"fileSystemInfo\": {}\n}",
			"routing": {
				"send": {
					"property": "item",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Create Upload Session"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.extractSensitivityLabels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Extract Sensitivity Labels"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.follow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Follow"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.invite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date Time",
			"name": "expirationDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Require Sign In",
			"name": "requireSignIn",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "requireSignIn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Retain Inherited Permissions",
			"name": "retainInheritedPermissions",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "retainInheritedPermissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "Send Invitation",
			"name": "sendInvitation",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "sendInvitation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Invite"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Preview"
					]
				}
			}
		},
		{
			"displayName": "Allow Edit",
			"name": "allowEdit",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "allowEdit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Preview"
					]
				}
			}
		},
		{
			"displayName": "Chromeless",
			"name": "chromeless",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "chromeless",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Preview"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "page",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Preview"
					]
				}
			}
		},
		{
			"displayName": "Viewer",
			"name": "viewer",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "viewer",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Preview"
					]
				}
			}
		},
		{
			"displayName": "Zoom",
			"name": "zoom",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "zoom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Preview"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Restore"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Restore"
					]
				}
			}
		},
		{
			"displayName": "Parent Reference",
			"name": "parentReference",
			"type": "json",
			"default": "{\n  \"sharepointIds\": {}\n}",
			"routing": {
				"send": {
					"property": "parentReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.unfollow",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Unfollow"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/microsoft.graph.validatePermission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Validate Permission"
					]
				}
			}
		},
		{
			"displayName": "Challenge Token",
			"name": "challengeToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "challengeToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Validate Permission"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Validate Permission"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/permissions/{permission-id}/microsoft.graph.grant",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Permissions Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/permissions/{permission-id}/microsoft.graph.revokeGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Permissions Permission Revoke Grants"
					]
				}
			}
		},
		{
			"displayName": "Grantees",
			"name": "grantees",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "grantees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Permissions Permission Revoke Grants"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/subscriptions/{subscription-id}/microsoft.graph.reauthorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Subscriptions Subscription Reauthorize"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/versions/{driveItemVersion-id}/microsoft.graph.restoreVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Versions Drive Item Version Restore Version"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/application/microsoft.graph.calculate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Application Calculate"
					]
				}
			}
		},
		{
			"displayName": "Calculation Type",
			"name": "calculationType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "calculationType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Application Calculate"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.abs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Abs"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Abs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.accrInt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Calc Method",
			"name": "calcMethod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "calcMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "First Interest",
			"name": "firstInterest",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "firstInterest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Issue",
			"name": "issue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Par",
			"name": "par",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "par",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.accrIntM",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int M"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int M"
					]
				}
			}
		},
		{
			"displayName": "Issue",
			"name": "issue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int M"
					]
				}
			}
		},
		{
			"displayName": "Par",
			"name": "par",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "par",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int M"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int M"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Accr Int M"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.acos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acos"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acos"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.acosh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acosh"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acosh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.acot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acot"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acot"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.acoth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acoth"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Acoth"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.amorDegrc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "Date Purchased",
			"name": "datePurchased",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "datePurchased",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "First Period",
			"name": "firstPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "firstPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Degrc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.amorLinc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "Date Purchased",
			"name": "datePurchased",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "datePurchased",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "First Period",
			"name": "firstPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "firstPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Amor Linc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.and",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions And"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions And"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.arabic",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Arabic"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Arabic"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.areas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Areas"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Areas"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.asc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Asc"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Asc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.asin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Asin"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Asin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.asinh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Asinh"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Asinh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.atan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atan"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atan"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.atan2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atan 2"
					]
				}
			}
		},
		{
			"displayName": "X Num",
			"name": "xNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "xNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atan 2"
					]
				}
			}
		},
		{
			"displayName": "Y Num",
			"name": "yNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atan 2"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.atanh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atanh"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Atanh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.aveDev",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ave Dev"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ave Dev"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.average",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.averageA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average A"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.averageIf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average If"
					]
				}
			}
		},
		{
			"displayName": "Average Range",
			"name": "averageRange",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "averageRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average If"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average If"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "range",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average If"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.averageIfs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average Ifs"
					]
				}
			}
		},
		{
			"displayName": "Average Range",
			"name": "averageRange",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "averageRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average Ifs"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Average Ifs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bahtText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Baht Text"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Baht Text"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.base",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Base"
					]
				}
			}
		},
		{
			"displayName": "Min Length",
			"name": "minLength",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "minLength",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Base"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Base"
					]
				}
			}
		},
		{
			"displayName": "Radix",
			"name": "radix",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "radix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Base"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.besselI",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel I"
					]
				}
			}
		},
		{
			"displayName": "N",
			"name": "n",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "n",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel I"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel I"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.besselJ",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel J"
					]
				}
			}
		},
		{
			"displayName": "N",
			"name": "n",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "n",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel J"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel J"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.besselK",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel K"
					]
				}
			}
		},
		{
			"displayName": "N",
			"name": "n",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "n",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel K"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel K"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.besselY",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel Y"
					]
				}
			}
		},
		{
			"displayName": "N",
			"name": "n",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "n",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel Y"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bessel Y"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.beta_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "A",
			"name": "A",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "A",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "B",
			"name": "B",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "B",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "Beta",
			"name": "beta",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.beta_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Inv"
					]
				}
			}
		},
		{
			"displayName": "A",
			"name": "A",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "A",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Inv"
					]
				}
			}
		},
		{
			"displayName": "B",
			"name": "B",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "B",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Inv"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Inv"
					]
				}
			}
		},
		{
			"displayName": "Beta",
			"name": "beta",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Beta Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bin2Dec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Dec"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Dec"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bin2Hex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bin2Oct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bin 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.binom_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Number S",
			"name": "numberS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Probability S",
			"name": "probabilityS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probabilityS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Trials",
			"name": "trials",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "trials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.binom_Dist_Range",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist Range"
					]
				}
			}
		},
		{
			"displayName": "Number S",
			"name": "numberS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist Range"
					]
				}
			}
		},
		{
			"displayName": "Number S 2",
			"name": "numberS2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberS2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist Range"
					]
				}
			}
		},
		{
			"displayName": "Probability S",
			"name": "probabilityS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probabilityS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist Range"
					]
				}
			}
		},
		{
			"displayName": "Trials",
			"name": "trials",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "trials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Dist Range"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.binom_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Inv"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability S",
			"name": "probabilityS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probabilityS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Inv"
					]
				}
			}
		},
		{
			"displayName": "Trials",
			"name": "trials",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "trials",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Binom Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bitand",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitand"
					]
				}
			}
		},
		{
			"displayName": "Number 1",
			"name": "number1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitand"
					]
				}
			}
		},
		{
			"displayName": "Number 2",
			"name": "number2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitand"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bitlshift",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitlshift"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitlshift"
					]
				}
			}
		},
		{
			"displayName": "Shift Amount",
			"name": "shiftAmount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "shiftAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitlshift"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bitor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitor"
					]
				}
			}
		},
		{
			"displayName": "Number 1",
			"name": "number1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitor"
					]
				}
			}
		},
		{
			"displayName": "Number 2",
			"name": "number2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitor"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bitrshift",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitrshift"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitrshift"
					]
				}
			}
		},
		{
			"displayName": "Shift Amount",
			"name": "shiftAmount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "shiftAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitrshift"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.bitxor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitxor"
					]
				}
			}
		},
		{
			"displayName": "Number 1",
			"name": "number1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitxor"
					]
				}
			}
		},
		{
			"displayName": "Number 2",
			"name": "number2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Bitxor"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ceiling_Math",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Math"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Math"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Math"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Math"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ceiling_Precise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Precise"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Precise"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ceiling Precise"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.char",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Char"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Char"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.chiSq_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.chiSq_Dist_RT",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist RT"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Dist RT"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.chiSq_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Inv"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.chiSq_Inv_RT",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Inv RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Inv RT"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Chi Sq Inv RT"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.choose",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Choose"
					]
				}
			}
		},
		{
			"displayName": "Index Num",
			"name": "indexNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "indexNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Choose"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Choose"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.clean",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Clean"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Clean"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.code",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Code"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Code"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.columns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Columns"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Columns"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.combin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Combin"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Combin"
					]
				}
			}
		},
		{
			"displayName": "Number Chosen",
			"name": "numberChosen",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberChosen",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Combin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.combina",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Combina"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Combina"
					]
				}
			}
		},
		{
			"displayName": "Number Chosen",
			"name": "numberChosen",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberChosen",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Combina"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.complex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Complex"
					]
				}
			}
		},
		{
			"displayName": "I Num",
			"name": "iNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "iNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Complex"
					]
				}
			}
		},
		{
			"displayName": "Real Num",
			"name": "realNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "realNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Complex"
					]
				}
			}
		},
		{
			"displayName": "Suffix",
			"name": "suffix",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "suffix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Complex"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.concatenate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Concatenate"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Concatenate"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.confidence_Norm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence Norm"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence Norm"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence Norm"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence Norm"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.confidence_T",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence T"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence T"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence T"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Confidence T"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.convert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Convert"
					]
				}
			}
		},
		{
			"displayName": "From Unit",
			"name": "fromUnit",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fromUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Convert"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Convert"
					]
				}
			}
		},
		{
			"displayName": "To Unit",
			"name": "toUnit",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "toUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Convert"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.cos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cos"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cos"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.cosh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cosh"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cosh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.cot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cot"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cot"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coth"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coth"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.count",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.countA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count A"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.countBlank",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count Blank"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "range",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count Blank"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.countIf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count If"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count If"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "range",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count If"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.countIfs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count Ifs"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Count Ifs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coupDayBs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Day Bs"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Day Bs"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Day Bs"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Day Bs"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Day Bs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coupDays",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coupDaysNc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days Nc"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days Nc"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days Nc"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days Nc"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Days Nc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coupNcd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Ncd"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Ncd"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Ncd"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Ncd"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Ncd"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coupNum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Num"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Num"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Num"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Num"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Num"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.coupPcd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Pcd"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Pcd"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Pcd"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Pcd"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Coup Pcd"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.csc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Csc"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Csc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.csch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Csch"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Csch"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.cumIPmt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum I Pmt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.cumPrinc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Cum Princ"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.date",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Date"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "day",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Date"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "month",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Date"
					]
				}
			}
		},
		{
			"displayName": "Year",
			"name": "year",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "year",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Date"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.datevalue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Datevalue"
					]
				}
			}
		},
		{
			"displayName": "Date Text",
			"name": "dateText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "dateText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Datevalue"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.daverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Daverage"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Daverage"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Daverage"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Daverage"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.day",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Day"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Day"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.days",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.days360",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days 360"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days 360"
					]
				}
			}
		},
		{
			"displayName": "Method",
			"name": "method",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days 360"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Days 360"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.db",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions DB"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions DB"
					]
				}
			}
		},
		{
			"displayName": "Life",
			"name": "life",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "life",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions DB"
					]
				}
			}
		},
		{
			"displayName": "Month",
			"name": "month",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "month",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions DB"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions DB"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions DB"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dbcs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dbcs"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dbcs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dcount",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dcountA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount A"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount A"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount A"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dcount A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ddb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ddb"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ddb"
					]
				}
			}
		},
		{
			"displayName": "Factor",
			"name": "factor",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "factor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ddb"
					]
				}
			}
		},
		{
			"displayName": "Life",
			"name": "life",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "life",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ddb"
					]
				}
			}
		},
		{
			"displayName": "Period",
			"name": "period",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "period",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ddb"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ddb"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dec2Bin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dec2Hex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dec2Oct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dec 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.decimal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Decimal"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Decimal"
					]
				}
			}
		},
		{
			"displayName": "Radix",
			"name": "radix",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "radix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Decimal"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.degrees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Degrees"
					]
				}
			}
		},
		{
			"displayName": "Angle",
			"name": "angle",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "angle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Degrees"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.delta",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Delta"
					]
				}
			}
		},
		{
			"displayName": "Number 1",
			"name": "number1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Delta"
					]
				}
			}
		},
		{
			"displayName": "Number 2",
			"name": "number2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Delta"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.devSq",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dev Sq"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dev Sq"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dget",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dget"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dget"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dget"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dget"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.disc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Disc"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Disc"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Disc"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Disc"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Disc"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Disc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dmax",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmax"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmax"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmax"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmax"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dmin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmin"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmin"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmin"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dmin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dollar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar"
					]
				}
			}
		},
		{
			"displayName": "Decimals",
			"name": "decimals",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "decimals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dollarDe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar De"
					]
				}
			}
		},
		{
			"displayName": "Fraction",
			"name": "fraction",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fraction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar De"
					]
				}
			}
		},
		{
			"displayName": "Fractional Dollar",
			"name": "fractionalDollar",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fractionalDollar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar De"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dollarFr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar Fr"
					]
				}
			}
		},
		{
			"displayName": "Decimal Dollar",
			"name": "decimalDollar",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "decimalDollar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar Fr"
					]
				}
			}
		},
		{
			"displayName": "Fraction",
			"name": "fraction",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fraction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dollar Fr"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dproduct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dproduct"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dproduct"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dproduct"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dproduct"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dstDev",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dstDevP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev P"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev P"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev P"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dst Dev P"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dsum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dsum"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dsum"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dsum"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dsum"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.duration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "Coupon",
			"name": "coupon",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "coupon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "Yld",
			"name": "yld",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Duration"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dvar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.dvarP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar P"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar P"
					]
				}
			}
		},
		{
			"displayName": "Database",
			"name": "database",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "database",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar P"
					]
				}
			}
		},
		{
			"displayName": "Field",
			"name": "field",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "field",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Dvar P"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ecma_Ceiling",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ecma Ceiling"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ecma Ceiling"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ecma Ceiling"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.edate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Edate"
					]
				}
			}
		},
		{
			"displayName": "Months",
			"name": "months",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "months",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Edate"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Edate"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.effect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Effect"
					]
				}
			}
		},
		{
			"displayName": "Nominal Rate",
			"name": "nominalRate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nominalRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Effect"
					]
				}
			}
		},
		{
			"displayName": "Npery",
			"name": "npery",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "npery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Effect"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.eoMonth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Eo Month"
					]
				}
			}
		},
		{
			"displayName": "Months",
			"name": "months",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "months",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Eo Month"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Eo Month"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.erf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf"
					]
				}
			}
		},
		{
			"displayName": "Lower Limit",
			"name": "lowerLimit",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lowerLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf"
					]
				}
			}
		},
		{
			"displayName": "Upper Limit",
			"name": "upperLimit",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "upperLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.erfC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf C"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf C"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.erfC_Precise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf C Precise"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "X",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "X",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf C Precise"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.erf_Precise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf Precise"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "X",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "X",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Erf Precise"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.error_Type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Error Type"
					]
				}
			}
		},
		{
			"displayName": "Error Val",
			"name": "errorVal",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "errorVal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Error Type"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.even",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Even"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Even"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.exact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Exact"
					]
				}
			}
		},
		{
			"displayName": "Text 1",
			"name": "text1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Exact"
					]
				}
			}
		},
		{
			"displayName": "Text 2",
			"name": "text2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Exact"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.exp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Exp"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Exp"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.expon_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Expon Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Expon Dist"
					]
				}
			}
		},
		{
			"displayName": "Lambda",
			"name": "lambda",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lambda",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Expon Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Expon Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.f_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 1",
			"name": "degFreedom1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 2",
			"name": "degFreedom2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.f_Dist_RT",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 1",
			"name": "degFreedom1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 2",
			"name": "degFreedom2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist RT"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Dist RT"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.f_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 1",
			"name": "degFreedom1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 2",
			"name": "degFreedom2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.f_Inv_RT",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 1",
			"name": "degFreedom1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom 2",
			"name": "degFreedom2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv RT"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions F Inv RT"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.fact",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fact"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fact"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.factDouble",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fact Double"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fact Double"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.false",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions False"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find"
					]
				}
			}
		},
		{
			"displayName": "Find Text",
			"name": "findText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "findText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find"
					]
				}
			}
		},
		{
			"displayName": "Start Num",
			"name": "startNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find"
					]
				}
			}
		},
		{
			"displayName": "Within Text",
			"name": "withinText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "withinText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.findB",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find B"
					]
				}
			}
		},
		{
			"displayName": "Find Text",
			"name": "findText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "findText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find B"
					]
				}
			}
		},
		{
			"displayName": "Start Num",
			"name": "startNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find B"
					]
				}
			}
		},
		{
			"displayName": "Within Text",
			"name": "withinText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "withinText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Find B"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.fisher",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fisher"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fisher"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.fisherInv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fisher Inv"
					]
				}
			}
		},
		{
			"displayName": "Y",
			"name": "y",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "y",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fisher Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.fixed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fixed"
					]
				}
			}
		},
		{
			"displayName": "Decimals",
			"name": "decimals",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "decimals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fixed"
					]
				}
			}
		},
		{
			"displayName": "No Commas",
			"name": "noCommas",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "noCommas",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fixed"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fixed"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.floor_Math",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Math"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Math"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Math"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Math"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.floor_Precise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Precise"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Precise"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Floor Precise"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.fv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fv"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fv"
					]
				}
			}
		},
		{
			"displayName": "Pmt",
			"name": "pmt",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pmt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fv"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fv"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fv"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.fvschedule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fvschedule"
					]
				}
			}
		},
		{
			"displayName": "Principal",
			"name": "principal",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "principal",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fvschedule"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Fvschedule"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gamma",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gammaLn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Ln"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Ln"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gammaLn_Precise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Ln Precise"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Ln Precise"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gamma_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Dist"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Dist"
					]
				}
			}
		},
		{
			"displayName": "Beta",
			"name": "beta",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gamma_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Inv"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Inv"
					]
				}
			}
		},
		{
			"displayName": "Beta",
			"name": "beta",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gamma Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gauss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gauss"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gauss"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.gcd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gcd"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Gcd"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.geStep",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ge Step"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ge Step"
					]
				}
			}
		},
		{
			"displayName": "Step",
			"name": "step",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "step",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ge Step"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.geoMean",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Geo Mean"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Geo Mean"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.harMean",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Har Mean"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Har Mean"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hex2Bin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hex2Dec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Dec"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Dec"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hex2Oct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hex 2 Oct"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hlookup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hlookup"
					]
				}
			}
		},
		{
			"displayName": "Lookup Value",
			"name": "lookupValue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lookupValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hlookup"
					]
				}
			}
		},
		{
			"displayName": "Range Lookup",
			"name": "rangeLookup",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rangeLookup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hlookup"
					]
				}
			}
		},
		{
			"displayName": "Row Index Num",
			"name": "rowIndexNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rowIndexNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hlookup"
					]
				}
			}
		},
		{
			"displayName": "Table Array",
			"name": "tableArray",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tableArray",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hlookup"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hour",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hour"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hour"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hypGeom_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist"
					]
				}
			}
		},
		{
			"displayName": "Number Pop",
			"name": "numberPop",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberPop",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist"
					]
				}
			}
		},
		{
			"displayName": "Number Sample",
			"name": "numberSample",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberSample",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist"
					]
				}
			}
		},
		{
			"displayName": "Population S",
			"name": "populationS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "populationS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist"
					]
				}
			}
		},
		{
			"displayName": "Sample S",
			"name": "sampleS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sampleS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyp Geom Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.hyperlink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyperlink"
					]
				}
			}
		},
		{
			"displayName": "Friendly Name",
			"name": "friendlyName",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "friendlyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyperlink"
					]
				}
			}
		},
		{
			"displayName": "Link Location",
			"name": "linkLocation",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "linkLocation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Hyperlink"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.if",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions If"
					]
				}
			}
		},
		{
			"displayName": "Logical Test",
			"name": "logicalTest",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "logicalTest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions If"
					]
				}
			}
		},
		{
			"displayName": "Value If False",
			"name": "valueIfFalse",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "valueIfFalse",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions If"
					]
				}
			}
		},
		{
			"displayName": "Value If True",
			"name": "valueIfTrue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "valueIfTrue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions If"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imAbs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Abs"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Abs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imArgument",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Argument"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Argument"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imConjugate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Conjugate"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Conjugate"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imCos",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Cos"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Cos"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imCosh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Cosh"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Cosh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imCot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Cot"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Cot"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imCsc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Csc"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Csc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imCsch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Csch"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Csch"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imDiv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Div"
					]
				}
			}
		},
		{
			"displayName": "Inumber 1",
			"name": "inumber1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Div"
					]
				}
			}
		},
		{
			"displayName": "Inumber 2",
			"name": "inumber2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Div"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imExp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Exp"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Exp"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imLn",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Ln"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Ln"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imLog10",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Log 10"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Log 10"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imLog2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Log 2"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Log 2"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imPower",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Power"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Power"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Power"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imProduct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Product"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Product"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imReal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Real"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Real"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sec"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sec"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSech",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sech"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sech"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sin"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSinh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sinh"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sinh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSqrt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sqrt"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sqrt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sub"
					]
				}
			}
		},
		{
			"displayName": "Inumber 1",
			"name": "inumber1",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sub"
					]
				}
			}
		},
		{
			"displayName": "Inumber 2",
			"name": "inumber2",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sub"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imSum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sum"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Sum"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imTan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Tan"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Im Tan"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.imaginary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Imaginary"
					]
				}
			}
		},
		{
			"displayName": "Inumber",
			"name": "inumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Imaginary"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.int",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.intRate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int Rate"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int Rate"
					]
				}
			}
		},
		{
			"displayName": "Investment",
			"name": "investment",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "investment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int Rate"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int Rate"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int Rate"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Int Rate"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ipmt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "Per",
			"name": "per",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "per",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ipmt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.irr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Irr"
					]
				}
			}
		},
		{
			"displayName": "Guess",
			"name": "guess",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "guess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Irr"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Irr"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isErr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Err"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Err"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isError",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Error"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Error"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isEven",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Even"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Even"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isFormula",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Formula"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Formula"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isLogical",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Logical"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Logical"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isNA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is NA"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is NA"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isNonText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Non Text"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Non Text"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isNumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Number"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Number"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isOdd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Odd"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Odd"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isText",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Text"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Is Text"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isoWeekNum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Iso Week Num"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "date",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Iso Week Num"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.iso_Ceiling",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Iso Ceiling"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Iso Ceiling"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Iso Ceiling"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ispmt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ispmt"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ispmt"
					]
				}
			}
		},
		{
			"displayName": "Per",
			"name": "per",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "per",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ispmt"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ispmt"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ispmt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.isref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Isref"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Isref"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.kurt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Kurt"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Kurt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.large",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Large"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Large"
					]
				}
			}
		},
		{
			"displayName": "K",
			"name": "k",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "k",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Large"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.lcm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lcm"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lcm"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.left",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Left"
					]
				}
			}
		},
		{
			"displayName": "Num Chars",
			"name": "numChars",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numChars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Left"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Left"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.leftb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Leftb"
					]
				}
			}
		},
		{
			"displayName": "Num Bytes",
			"name": "numBytes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numBytes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Leftb"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Leftb"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.len",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Len"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Len"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.lenb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lenb"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lenb"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ln",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ln"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ln"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.log",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log"
					]
				}
			}
		},
		{
			"displayName": "Base",
			"name": "base",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "base",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.log10",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log 10"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log 10"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.logNorm_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "Mean",
			"name": "mean",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.logNorm_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "Mean",
			"name": "mean",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Log Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.lookup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lookup"
					]
				}
			}
		},
		{
			"displayName": "Lookup Value",
			"name": "lookupValue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lookupValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lookup"
					]
				}
			}
		},
		{
			"displayName": "Lookup Vector",
			"name": "lookupVector",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lookupVector",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lookup"
					]
				}
			}
		},
		{
			"displayName": "Result Vector",
			"name": "resultVector",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "resultVector",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lookup"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.lower",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lower"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Lower"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.match",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Match"
					]
				}
			}
		},
		{
			"displayName": "Lookup Array",
			"name": "lookupArray",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lookupArray",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Match"
					]
				}
			}
		},
		{
			"displayName": "Lookup Value",
			"name": "lookupValue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lookupValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Match"
					]
				}
			}
		},
		{
			"displayName": "Match Type",
			"name": "matchType",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "matchType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Match"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.max",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Max"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Max"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.maxA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Max A"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Max A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.mduration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "Coupon",
			"name": "coupon",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "coupon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "Yld",
			"name": "yld",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mduration"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.median",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Median"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Median"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.mid",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mid"
					]
				}
			}
		},
		{
			"displayName": "Num Chars",
			"name": "numChars",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numChars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mid"
					]
				}
			}
		},
		{
			"displayName": "Start Num",
			"name": "startNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mid"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mid"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.midb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Midb"
					]
				}
			}
		},
		{
			"displayName": "Num Bytes",
			"name": "numBytes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numBytes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Midb"
					]
				}
			}
		},
		{
			"displayName": "Start Num",
			"name": "startNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Midb"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Midb"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.min",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Min"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Min"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.minA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Min A"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Min A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.minute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Minute"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Minute"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.mirr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mirr"
					]
				}
			}
		},
		{
			"displayName": "Finance Rate",
			"name": "financeRate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "financeRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mirr"
					]
				}
			}
		},
		{
			"displayName": "Reinvest Rate",
			"name": "reinvestRate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reinvestRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mirr"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mirr"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.mod",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mod"
					]
				}
			}
		},
		{
			"displayName": "Divisor",
			"name": "divisor",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "divisor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mod"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mod"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.month",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Month"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Month"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.mround",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mround"
					]
				}
			}
		},
		{
			"displayName": "Multiple",
			"name": "multiple",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "multiple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mround"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Mround"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.multiNomial",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Multi Nomial"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Multi Nomial"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.n",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions N"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions N"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.na",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Na"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.negBinom_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Neg Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Neg Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Number F",
			"name": "numberF",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberF",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Neg Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Number S",
			"name": "numberS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Neg Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "Probability S",
			"name": "probabilityS",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probabilityS",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Neg Binom Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.networkDays",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days"
					]
				}
			}
		},
		{
			"displayName": "Holidays",
			"name": "holidays",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "holidays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.networkDays_Intl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days Intl"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days Intl"
					]
				}
			}
		},
		{
			"displayName": "Holidays",
			"name": "holidays",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "holidays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days Intl"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days Intl"
					]
				}
			}
		},
		{
			"displayName": "Weekend",
			"name": "weekend",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "weekend",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Network Days Intl"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.nominal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nominal"
					]
				}
			}
		},
		{
			"displayName": "Effect Rate",
			"name": "effectRate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "effectRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nominal"
					]
				}
			}
		},
		{
			"displayName": "Npery",
			"name": "npery",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "npery",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nominal"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.norm_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "Mean",
			"name": "mean",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.norm_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "Mean",
			"name": "mean",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.norm_S_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm S Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm S Dist"
					]
				}
			}
		},
		{
			"displayName": "Z",
			"name": "z",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "z",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm S Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.norm_S_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm S Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Norm S Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.not",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Not"
					]
				}
			}
		},
		{
			"displayName": "Logical",
			"name": "logical",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "logical",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Not"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.now",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Now"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.nper",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nper"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nper"
					]
				}
			}
		},
		{
			"displayName": "Pmt",
			"name": "pmt",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pmt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nper"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nper"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nper"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Nper"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.npv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Npv"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Npv"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Npv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.numberValue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Number Value"
					]
				}
			}
		},
		{
			"displayName": "Decimal Separator",
			"name": "decimalSeparator",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "decimalSeparator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Number Value"
					]
				}
			}
		},
		{
			"displayName": "Group Separator",
			"name": "groupSeparator",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "groupSeparator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Number Value"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Number Value"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oct2Bin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Bin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oct2Dec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Dec"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Dec"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oct2Hex",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "Places",
			"name": "places",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "places",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Oct 2 Hex"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.odd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oddFPrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "First Coupon",
			"name": "firstCoupon",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "firstCoupon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Issue",
			"name": "issue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "Yld",
			"name": "yld",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Price"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oddFYield",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "First Coupon",
			"name": "firstCoupon",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "firstCoupon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Issue",
			"name": "issue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd F Yield"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oddLPrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Last Interest",
			"name": "lastInterest",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lastInterest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "Yld",
			"name": "yld",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Price"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.oddLYield",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Last Interest",
			"name": "lastInterest",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lastInterest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Odd L Yield"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.or",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Or"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Or"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.pduration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pduration"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pduration"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pduration"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pduration"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.percentRank_Exc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Exc"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Exc"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Exc"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Exc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.percentRank_Inc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Inc"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Inc"
					]
				}
			}
		},
		{
			"displayName": "Significance",
			"name": "significance",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "significance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Inc"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percent Rank Inc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.percentile_Exc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percentile Exc"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percentile Exc"
					]
				}
			}
		},
		{
			"displayName": "K",
			"name": "k",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "k",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percentile Exc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.percentile_Inc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percentile Inc"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percentile Inc"
					]
				}
			}
		},
		{
			"displayName": "K",
			"name": "k",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "k",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Percentile Inc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.permut",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Permut"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Permut"
					]
				}
			}
		},
		{
			"displayName": "Number Chosen",
			"name": "numberChosen",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberChosen",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Permut"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.permutationa",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Permutationa"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Permutationa"
					]
				}
			}
		},
		{
			"displayName": "Number Chosen",
			"name": "numberChosen",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberChosen",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Permutationa"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.phi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Phi"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Phi"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.pi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pi"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.pmt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pmt"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pmt"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pmt"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pmt"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pmt"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pmt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.poisson_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Poisson Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Poisson Dist"
					]
				}
			}
		},
		{
			"displayName": "Mean",
			"name": "mean",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Poisson Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Poisson Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.power",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Power"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Power"
					]
				}
			}
		},
		{
			"displayName": "Power",
			"name": "power",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "power",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Power"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.ppmt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "Per",
			"name": "per",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "per",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Ppmt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "Yld",
			"name": "yld",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.priceDisc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Disc"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Disc"
					]
				}
			}
		},
		{
			"displayName": "Discount",
			"name": "discount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Disc"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Disc"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Disc"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Disc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.priceMat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "Issue",
			"name": "issue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "Yld",
			"name": "yld",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "yld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Price Mat"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.product",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Product"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Product"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.proper",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Proper"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Proper"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.pv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pv"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pv"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pv"
					]
				}
			}
		},
		{
			"displayName": "Pmt",
			"name": "pmt",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pmt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pv"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pv"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Pv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.quartile_Exc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quartile Exc"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quartile Exc"
					]
				}
			}
		},
		{
			"displayName": "Quart",
			"name": "quart",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "quart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quartile Exc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.quartile_Inc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quartile Inc"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quartile Inc"
					]
				}
			}
		},
		{
			"displayName": "Quart",
			"name": "quart",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "quart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quartile Inc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.quotient",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quotient"
					]
				}
			}
		},
		{
			"displayName": "Denominator",
			"name": "denominator",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "denominator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quotient"
					]
				}
			}
		},
		{
			"displayName": "Numerator",
			"name": "numerator",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numerator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Quotient"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.radians",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Radians"
					]
				}
			}
		},
		{
			"displayName": "Angle",
			"name": "angle",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "angle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Radians"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rand",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rand"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.randBetween",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rand Between"
					]
				}
			}
		},
		{
			"displayName": "Bottom",
			"name": "bottom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "bottom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rand Between"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "top",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "top",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rand Between"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rank_Avg",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Avg"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Avg"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Avg"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Avg"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rank_Eq",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Eq"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Eq"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "order",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Eq"
					]
				}
			}
		},
		{
			"displayName": "Ref",
			"name": "ref",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "ref",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rank Eq"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "Guess",
			"name": "guess",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "guess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "Pmt",
			"name": "pmt",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pmt",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rate"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.received",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Received"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Received"
					]
				}
			}
		},
		{
			"displayName": "Discount",
			"name": "discount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Received"
					]
				}
			}
		},
		{
			"displayName": "Investment",
			"name": "investment",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "investment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Received"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Received"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Received"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.replace",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace"
					]
				}
			}
		},
		{
			"displayName": "New Text",
			"name": "newText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "newText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace"
					]
				}
			}
		},
		{
			"displayName": "Num Chars",
			"name": "numChars",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numChars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace"
					]
				}
			}
		},
		{
			"displayName": "Old Text",
			"name": "oldText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "oldText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace"
					]
				}
			}
		},
		{
			"displayName": "Start Num",
			"name": "startNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.replaceB",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace B"
					]
				}
			}
		},
		{
			"displayName": "New Text",
			"name": "newText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "newText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace B"
					]
				}
			}
		},
		{
			"displayName": "Num Bytes",
			"name": "numBytes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numBytes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace B"
					]
				}
			}
		},
		{
			"displayName": "Old Text",
			"name": "oldText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "oldText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace B"
					]
				}
			}
		},
		{
			"displayName": "Start Num",
			"name": "startNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Replace B"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rept",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rept"
					]
				}
			}
		},
		{
			"displayName": "Number Times",
			"name": "numberTimes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numberTimes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rept"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rept"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.right",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Right"
					]
				}
			}
		},
		{
			"displayName": "Num Chars",
			"name": "numChars",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numChars",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Right"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Right"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rightb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rightb"
					]
				}
			}
		},
		{
			"displayName": "Num Bytes",
			"name": "numBytes",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numBytes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rightb"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rightb"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.roman",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Roman"
					]
				}
			}
		},
		{
			"displayName": "Form",
			"name": "form",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "form",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Roman"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Roman"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.round",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round"
					]
				}
			}
		},
		{
			"displayName": "Num Digits",
			"name": "numDigits",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numDigits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.roundDown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round Down"
					]
				}
			}
		},
		{
			"displayName": "Num Digits",
			"name": "numDigits",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numDigits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round Down"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round Down"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.roundUp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round Up"
					]
				}
			}
		},
		{
			"displayName": "Num Digits",
			"name": "numDigits",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numDigits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round Up"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Round Up"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rows"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rows"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.rri",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rri"
					]
				}
			}
		},
		{
			"displayName": "Fv",
			"name": "fv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "fv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rri"
					]
				}
			}
		},
		{
			"displayName": "Nper",
			"name": "nper",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "nper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rri"
					]
				}
			}
		},
		{
			"displayName": "Pv",
			"name": "pv",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pv",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Rri"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sec",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sec"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sec"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sech",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sech"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sech"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.second",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Second"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Second"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.seriesSum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Series Sum"
					]
				}
			}
		},
		{
			"displayName": "Coefficients",
			"name": "coefficients",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "coefficients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Series Sum"
					]
				}
			}
		},
		{
			"displayName": "M",
			"name": "m",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "m",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Series Sum"
					]
				}
			}
		},
		{
			"displayName": "N",
			"name": "n",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "n",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Series Sum"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Series Sum"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sheet",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sheet"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sheet"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sheets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sheets"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sheets"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sign"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sign"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sin"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sin"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sinh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sinh"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sinh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.skew",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Skew"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Skew"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.skew_p",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Skew P"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Skew P"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sln",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sln"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sln"
					]
				}
			}
		},
		{
			"displayName": "Life",
			"name": "life",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "life",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sln"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sln"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.small",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Small"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Small"
					]
				}
			}
		},
		{
			"displayName": "K",
			"name": "k",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "k",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Small"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sqrt",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sqrt"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sqrt"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sqrtPi",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sqrt Pi"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sqrt Pi"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.stDevA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev A"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.stDevPA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev PA"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev PA"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.stDev_P",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev P"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev P"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.stDev_S",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev S"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions St Dev S"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.standardize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Standardize"
					]
				}
			}
		},
		{
			"displayName": "Mean",
			"name": "mean",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "mean",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Standardize"
					]
				}
			}
		},
		{
			"displayName": "Standard Dev",
			"name": "standardDev",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "standardDev",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Standardize"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Standardize"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.substitute",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Substitute"
					]
				}
			}
		},
		{
			"displayName": "Instance Num",
			"name": "instanceNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "instanceNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Substitute"
					]
				}
			}
		},
		{
			"displayName": "New Text",
			"name": "newText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "newText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Substitute"
					]
				}
			}
		},
		{
			"displayName": "Old Text",
			"name": "oldText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "oldText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Substitute"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Substitute"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.subtotal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Subtotal"
					]
				}
			}
		},
		{
			"displayName": "Function Num",
			"name": "functionNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "functionNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Subtotal"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Subtotal"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sumIf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum If"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum If"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "range",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "range",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum If"
					]
				}
			}
		},
		{
			"displayName": "Sum Range",
			"name": "sumRange",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sumRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum If"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sumIfs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum Ifs"
					]
				}
			}
		},
		{
			"displayName": "Sum Range",
			"name": "sumRange",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sumRange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum Ifs"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum Ifs"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.sumSq",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum Sq"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Sum Sq"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.syd",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Syd"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Syd"
					]
				}
			}
		},
		{
			"displayName": "Life",
			"name": "life",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "life",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Syd"
					]
				}
			}
		},
		{
			"displayName": "Per",
			"name": "per",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "per",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Syd"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Syd"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.t",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.t_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.t_Dist_2T",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist 2 T"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist 2 T"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist 2 T"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.t_Dist_RT",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist RT"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist RT"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Dist RT"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.t_Inv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Inv"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Inv"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Inv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.t_Inv_2T",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Inv 2 T"
					]
				}
			}
		},
		{
			"displayName": "Deg Freedom",
			"name": "degFreedom",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "degFreedom",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Inv 2 T"
					]
				}
			}
		},
		{
			"displayName": "Probability",
			"name": "probability",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "probability",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions T Inv 2 T"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.tan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tan"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tan"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.tanh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tanh"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tanh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.tbillEq",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Eq"
					]
				}
			}
		},
		{
			"displayName": "Discount",
			"name": "discount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Eq"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Eq"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Eq"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.tbillPrice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Price"
					]
				}
			}
		},
		{
			"displayName": "Discount",
			"name": "discount",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Price"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Price"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Price"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.tbillYield",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Yield"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Yield"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Yield"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Tbill Yield"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.text",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Text"
					]
				}
			}
		},
		{
			"displayName": "Format Text",
			"name": "formatText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "formatText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Text"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Text"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Time"
					]
				}
			}
		},
		{
			"displayName": "Hour",
			"name": "hour",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "hour",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Time"
					]
				}
			}
		},
		{
			"displayName": "Minute",
			"name": "minute",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "minute",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Time"
					]
				}
			}
		},
		{
			"displayName": "Second",
			"name": "second",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "second",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Time"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.timevalue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Timevalue"
					]
				}
			}
		},
		{
			"displayName": "Time Text",
			"name": "timeText",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "timeText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Timevalue"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.today",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Today"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.trim",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trim"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trim"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.trimMean",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trim Mean"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trim Mean"
					]
				}
			}
		},
		{
			"displayName": "Percent",
			"name": "percent",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trim Mean"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.true",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions True"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.trunc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trunc"
					]
				}
			}
		},
		{
			"displayName": "Num Digits",
			"name": "numDigits",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "numDigits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trunc"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Trunc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.type",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Type"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Type"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.unichar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Unichar"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Unichar"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.unicode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Unicode"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Unicode"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.upper",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Upper"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Upper"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.usdollar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Usdollar"
					]
				}
			}
		},
		{
			"displayName": "Decimals",
			"name": "decimals",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "decimals",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Usdollar"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Usdollar"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Value"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Value"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.varA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var A"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var A"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.varPA",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var PA"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var PA"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.var_P",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var P"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var P"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.var_S",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var S"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Var S"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.vdb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "Cost",
			"name": "cost",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "Factor",
			"name": "factor",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "factor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "Life",
			"name": "life",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "life",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "No Switch",
			"name": "noSwitch",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "noSwitch",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "Salvage",
			"name": "salvage",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "salvage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vdb"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.vlookup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vlookup"
					]
				}
			}
		},
		{
			"displayName": "Col Index Num",
			"name": "colIndexNum",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "colIndexNum",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vlookup"
					]
				}
			}
		},
		{
			"displayName": "Lookup Value",
			"name": "lookupValue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "lookupValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vlookup"
					]
				}
			}
		},
		{
			"displayName": "Range Lookup",
			"name": "rangeLookup",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rangeLookup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vlookup"
					]
				}
			}
		},
		{
			"displayName": "Table Array",
			"name": "tableArray",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tableArray",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Vlookup"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.weekNum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Week Num"
					]
				}
			}
		},
		{
			"displayName": "Return Type",
			"name": "returnType",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "returnType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Week Num"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Week Num"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.weekday",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weekday"
					]
				}
			}
		},
		{
			"displayName": "Return Type",
			"name": "returnType",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "returnType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weekday"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weekday"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.weibull_Dist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weibull Dist"
					]
				}
			}
		},
		{
			"displayName": "Alpha",
			"name": "alpha",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "alpha",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weibull Dist"
					]
				}
			}
		},
		{
			"displayName": "Beta",
			"name": "beta",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "beta",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weibull Dist"
					]
				}
			}
		},
		{
			"displayName": "Cumulative",
			"name": "cumulative",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "cumulative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weibull Dist"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Weibull Dist"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.workDay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "days",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day"
					]
				}
			}
		},
		{
			"displayName": "Holidays",
			"name": "holidays",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "holidays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.workDay_Intl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day Intl"
					]
				}
			}
		},
		{
			"displayName": "Days",
			"name": "days",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "days",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day Intl"
					]
				}
			}
		},
		{
			"displayName": "Holidays",
			"name": "holidays",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "holidays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day Intl"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day Intl"
					]
				}
			}
		},
		{
			"displayName": "Weekend",
			"name": "weekend",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "weekend",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Work Day Intl"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.xirr",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xirr"
					]
				}
			}
		},
		{
			"displayName": "Dates",
			"name": "dates",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "dates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xirr"
					]
				}
			}
		},
		{
			"displayName": "Guess",
			"name": "guess",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "guess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xirr"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xirr"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.xnpv",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xnpv"
					]
				}
			}
		},
		{
			"displayName": "Dates",
			"name": "dates",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "dates",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xnpv"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xnpv"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xnpv"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.xor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xor"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Xor"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.year",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Year"
					]
				}
			}
		},
		{
			"displayName": "Serial Number",
			"name": "serialNumber",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "serialNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Year"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.yearFrac",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Year Frac"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Year Frac"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Year Frac"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Year Frac"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.yield",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "frequency",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.yieldDisc",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Disc"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Disc"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Disc"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Disc"
					]
				}
			}
		},
		{
			"displayName": "Redemption",
			"name": "redemption",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "redemption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Disc"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Disc"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.yieldMat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "Basis",
			"name": "basis",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "basis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "Issue",
			"name": "issue",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "issue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "Maturity",
			"name": "maturity",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "maturity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "Pr",
			"name": "pr",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "pr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "rate",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "Settlement",
			"name": "settlement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "settlement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Yield Mat"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/functions/microsoft.graph.z_Test",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Z Test"
					]
				}
			}
		},
		{
			"displayName": "Array",
			"name": "array",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "array",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Z Test"
					]
				}
			}
		},
		{
			"displayName": "Sigma",
			"name": "sigma",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sigma",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Z Test"
					]
				}
			}
		},
		{
			"displayName": "X",
			"name": "x",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "x",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Functions Z Test"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/microsoft.graph.closeSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Close Session"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/microsoft.graph.createSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Create Session"
					]
				}
			}
		},
		{
			"displayName": "Persist Changes",
			"name": "persistChanges",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "persistChanges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Create Session"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/microsoft.graph.refreshSession",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Refresh Session"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/names/microsoft.graph.addFormulaLocal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "Formula",
			"name": "formula",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "formula",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Add"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Add"
					]
				}
			}
		},
		{
			"displayName": "Has Headers",
			"name": "hasHeaders",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "hasHeaders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "index",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{\n  \"icon\": {},\n  \"values\": {}\n}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyBottomItemsFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyBottomPercentFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "Percent",
			"name": "percent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyCellColorFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyCustomFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Criteria 1",
			"name": "criteria1",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "criteria1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Criteria 2",
			"name": "criteria2",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "criteria2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Oper",
			"name": "oper",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "oper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyDynamicFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyFontColorFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyIconFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter"
					]
				}
			}
		},
		{
			"displayName": "Icon",
			"name": "icon",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyTopItemsFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyTopPercentFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "Percent",
			"name": "percent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyValuesFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Columns Workbook Table Column Filter Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.clearFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Clear Filters"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.convertToRange",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Convert To Range"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/microsoft.graph.reapplyFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Reapply Filters"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/rows/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Add"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "index",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Rows Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/microsoft.graph.apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"type": "json",
			"default": "[\n  {\n    \"icon\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "Match Case",
			"name": "matchCase",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "matchCase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/tables/{workbookTable-id}/sort/microsoft.graph.reapply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Tables Workbook Table Sort Reapply"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Add"
					]
				}
			}
		},
		{
			"displayName": "Series By",
			"name": "seriesBy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "seriesBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Add"
					]
				}
			}
		},
		{
			"displayName": "Source Data",
			"name": "sourceData",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sourceData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Add"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/majorGridlines/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Major Gridlines Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis/minorGridlines/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Category Axis Minor Gridlines Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/majorGridlines/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Major Gridlines Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/seriesAxis/minorGridlines/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Series Axis Minor Gridlines Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/majorGridlines/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Major Gridlines Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/valueAxis/minorGridlines/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Axes Value Axis Minor Gridlines Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/fill/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/dataLabels/format/fill/microsoft.graph.setSolidColor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Data Labels Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/fill/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/format/fill/microsoft.graph.setSolidColor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/fill/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/legend/format/fill/microsoft.graph.setSolidColor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Legend Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.setData",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Data"
					]
				}
			}
		},
		{
			"displayName": "Series By",
			"name": "seriesBy",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "seriesBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Data"
					]
				}
			}
		},
		{
			"displayName": "Source Data",
			"name": "sourceData",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "sourceData",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Data"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/microsoft.graph.setPosition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Position"
					]
				}
			}
		},
		{
			"displayName": "End Cell",
			"name": "endCell",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "endCell",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Position"
					]
				}
			}
		},
		{
			"displayName": "Start Cell",
			"name": "startCell",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "startCell",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Set Position"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/fill/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/fill/microsoft.graph.setSolidColor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/format/line/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Format Line Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format/fill/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/series/{workbookChartSeries-id}/points/{workbookChartPoint-id}/format/fill/microsoft.graph.setSolidColor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Series Workbook Chart Series Points Workbook Chart Point Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/fill/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/title/format/fill/microsoft.graph.setSolidColor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Charts Workbook Chart Title Format Fill Set Solid Color"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/names/microsoft.graph.addFormulaLocal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "comment",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "Formula",
			"name": "formula",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "formula",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Names Add Formula Local"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/microsoft.graph.refreshAll",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Pivot Tables Refresh All"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/pivotTables/{workbookPivotTable-id}/microsoft.graph.refresh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Pivot Tables Workbook Pivot Table Refresh"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection/microsoft.graph.protect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Protect"
					]
				}
			}
		},
		{
			"displayName": "Options",
			"name": "options",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Protect"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/protection/microsoft.graph.unprotect",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Protection Unprotect"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Add"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Add"
					]
				}
			}
		},
		{
			"displayName": "Has Headers",
			"name": "hasHeaders",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "hasHeaders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "index",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "json",
			"default": "{\n  \"icon\": {},\n  \"values\": {}\n}",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyBottomItemsFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Items Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyBottomPercentFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "Percent",
			"name": "percent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Bottom Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyCellColorFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Cell Color Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyCustomFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Criteria 1",
			"name": "criteria1",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "criteria1",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Criteria 2",
			"name": "criteria2",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "criteria2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "Oper",
			"name": "oper",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "oper",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Custom Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyDynamicFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter"
					]
				}
			}
		},
		{
			"displayName": "Criteria",
			"name": "criteria",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "criteria",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Dynamic Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyFontColorFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter"
					]
				}
			}
		},
		{
			"displayName": "Color",
			"name": "color",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "color",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Font Color Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyIconFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter"
					]
				}
			}
		},
		{
			"displayName": "Icon",
			"name": "icon",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "icon",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Icon Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyTopItemsFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Items Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyTopPercentFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "Percent",
			"name": "percent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "percent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Top Percent Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.applyValuesFilter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Apply Values Filter"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/columns/{workbookTableColumn-id}/filter/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Columns Workbook Table Column Filter Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.clearFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Clear Filters"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.convertToRange",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Convert To Range"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/microsoft.graph.reapplyFilters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Reapply Filters"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/rows/microsoft.graph.add",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Add"
					]
				}
			}
		},
		{
			"displayName": "Index",
			"name": "index",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "index",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Add"
					]
				}
			}
		},
		{
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Rows Add"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort/microsoft.graph.apply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"type": "json",
			"default": "[\n  {\n    \"icon\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "fields",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "Match Case",
			"name": "matchCase",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "matchCase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "Method",
			"name": "method",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "method",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Apply"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort/microsoft.graph.clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Clear"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/items/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/tables/{workbookTable-id}/sort/microsoft.graph.reapply",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive Items Drive Item Workbook Worksheets Workbook Worksheet Tables Workbook Table Sort Reapply"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/microsoft.graph.addCopy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "contentType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Add Copy"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/microsoft.graph.addCopyFromContentTypeHub",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "Content Type ID",
			"name": "contentTypeId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "contentTypeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Add Copy From Content Type Hub"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/microsoft.graph.associateWithHubSites",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Hub Site Urls",
			"name": "hubSiteUrls",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "hubSiteUrls",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "Propagate To Existing Lists",
			"name": "propagateToExistingLists",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "propagateToExistingLists",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Associate With Hub Sites"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/microsoft.graph.copyToDefaultContentLocation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Destination File Name",
			"name": "destinationFileName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "destinationFileName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "Source File",
			"name": "sourceFile",
			"type": "json",
			"default": "{\n  \"sharepointIds\": {}\n}",
			"routing": {
				"send": {
					"property": "sourceFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Copy To Default Content Location"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/microsoft.graph.publish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Publish"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/contentTypes/{contentType-id}/microsoft.graph.unpublish",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Content Types Content Type Unpublish"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/documentSetVersions/{documentSetVersion-id}/microsoft.graph.restore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Document Set Versions Document Set Version Restore"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/microsoft.graph.createLink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Expiration Date Time",
			"name": "expirationDateTime",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "expirationDateTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Recipients",
			"name": "recipients",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "recipients",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Retain Inherited Permissions",
			"name": "retainInheritedPermissions",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "retainInheritedPermissions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "scope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Create Link"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/items/{listItem-id}/versions/{listItemVersion-id}/microsoft.graph.restoreVersion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Items List Item Versions List Item Version Restore Version"
					]
				}
			}
		},
		{
			"displayName": "POST /drives/{drive-id}/list/subscriptions/{subscription-id}/microsoft.graph.reauthorize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Drives Actions"
					],
					"operation": [
						"Drives Drive List Subscriptions Subscription Reauthorize"
					]
				}
			}
		},
];
