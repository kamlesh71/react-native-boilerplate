import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { setColorSchema } from '@/store/color-schema/slices/color-schema-slice';
import { selectUsingSystemSchema } from '@/store/color-schema/selectors';
import { useUpdatedEffect } from './useUpdatedEffect';

export const useListenColorSchemaChange = () => {
  const isUsingSystem = useSelector(selectUsingSystemSchema);
  const systemColorSchema = useColorScheme();

  const dispatch = useDispatch();

  useUpdatedEffect(() => {
    console.debug(isUsingSystem);
    if (isUsingSystem) {
      dispatch(setColorSchema(systemColorSchema));
    }
  }, [systemColorSchema, isUsingSystem]);
};
